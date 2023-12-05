---
title: ""
sidebar_label: "Collections"

---

### No.1 选取文件夹

> :clock11:在需要循环读取指定文件夹中多个文件时，提供选择文件夹的弹窗。

```vba
Sub GetFolderPath()

    ' FolderPath
    Dim folderPath As String

    ' 调用方法
    With Application.FileDialog(msoFileDialogFolderPicker)
        ' 弹窗名称
        .Title = "choose folder"

        ' 按下OK .Show = -1;
        ' 按下Cancel .Show = 0;

        If .Show = -1 Then
            folderPath = .SelectedItems(1)

            ' 赋值给你想要的位置
            ' ThisWorkbook.Worksheets("Sheet1").Range("D3").value = folderPath
            ActiveSheet.Range("D3").value = folderPath
            ' Range("D3").value = folderPath

        End If
    End With

End Sub
```

### No.2 依次读取文件（不包含SubFolder）

> :clock11:循环读取指定文件夹中多个文件（可以指定文件后缀名），然后添加你想要对文件进行的操作。
> 
> :bulb:可以改写为带参数类型

```vba
Sub ReadFilesInFolder()
    Dim folderPath As String
    Dim fileExtension As String
    Dim fileName As String
    Dim fileContent As String

    ' 这里用的是上面的D3的value，可以自行赋值
    folderPath = Range("D3").value
    ' 指定想要读取的文件后缀
    fileExtension = "txt"

    ' 使用 Dir 函数列出文件夹中所有具有指定后缀的文件
    ' 将第一个文件名赋值给 fileName 变量
    fileName = Dir(folderPath & "\\*." & fileExtension)
    ' 循环所有文件
    Do While fileName <> ""
        ' 打开文件为#1用于输入
        Open folderPath & "\\" & fileName For Input As #1

        ' Input$ 函数用于从打开的文件中读取指定长度的文本
        ' LOF(1) 指定了要读取的长度，#1 指定了文件号
        ' 其中LOF(1) 函数返回打开文件的长度（以字节为单位）
        ' 将打开的文件的全部内容读取
        fileContent = Input$(LOF(1), #1)

        ' 关闭文件
        Close #1

        ' 赋值给cell（可自行更改）
        Range("B" & Cells(Rows.Count, 2).End(xlUp).row + 1).value = fileContent
        ' 获取下一个文件名，继续循环
        fileName = Dir
    Loop
End Sub
```

### No.3 依次读取文件（包含SubFolder）

> :clock11:循环读取指定文件夹中多个文件（可以指定文件后缀名），然后添加你想要对文件进行的操作。
> 
> FSO还有很多方法可以操作磁盘、文件夹、文件等，详见:point_right:[FSO](https://learn.microsoft.com/zh-tw/office/vba/language/reference/user-interface-help/filesystemobject-object "go")
> 
> :no_good_man:但是FSO无法操作二进制文件；如需要，请使用CreateObject("ADODB.Stream")
> 
> ```vba
> Set objStream = CreateObject("ADODB.Stream")
>     objStream.Charset = "utf-8"
>     objStream.Open
>     objStream.LoadFromFile (FilePath)
>     strData = objStream.ReadText()
> ```

```vba
Sub ReadFilesInFolder(folderPath)
    Dim fso As Object
    Dim folder As Object
    Dim subfolder As Object
    Dim file As Object
    Dim fileExtension As String    

    Set fso = CreateObject("Scripting.FileSystemObject")
    ' 利用fso的GetFolder方法读取文件夹中的内容
    Set folder = fso.GetFolder(folderPath)
    ' 指定想要读取的文件后缀
    fileExtension = "txt"

    ' 循环遍历文件夹中的每个文件
    For Each file In folder.Files
        ' 检查文件是否具有指定的文件后缀
        If fso.GetExtensionName(file.Path) = fileExtension Then
            ' 按需处理文件
            ' ...
        End If
    Next file

    ' 循环遍历文件夹中的每个子文件夹
    For Each subfolder In folder.Subfolders
        ' 对每个子文件夹递归调用相同的循环
        ReadFilesInFolder(subfolder)
    Next subfolder
End Sub
```

### No.4 取最终行

> :clock11:拿到sheet中还未编辑的最后一行

```vba
    Dim LastRow As Integer
    ' 如果想要从别的列进行判断，请更改K为你想要的列
    LastRow = Range("K" & Rows.Count).End(xlUp).row + 1
    ' 同样的效果
    LastRow = [K65536].End(xlUp).row + 1
    ' or（请自行修改列数）
    LastRow = Cells(Rows.Count, 2).End(xlUp).Row

    MsgBox (LastRow)
```

### No.5 取最终列

> :clock11:拿到sheet中还未编辑的最后一列

```vba
    ' 第三行的非空单元格的最终列数
    lastColumn = Cells(3, Columns.Count).End(xlToLeft).Column
    ' 但是上面的不适用于合并单元格的情况，只能获取到合并单元格的首列

    ' 判断第三行的这一列的这个单元格是否是合并单元格
    If Cells(3, lastColumn).MergeCells Then
        ' 拿到合并单元格的最右边一列的列数
        mergedLastColumn = Cells(3, lastColumn).MergeArea.Columns.Count + lastColumn - 1
    End If
    ' 此时拿到的才是最终列数
```

### No.6 复制粘贴带公式的单元格

> :clock11:如果不想粘贴公式而是只粘贴值的话

```vba
    ' 选择区域
    Range("J2:J10").Select
    ' copy区域
    Selection.Copy
    ' 特殊粘贴（不会将引用复制过来）
    Range("K2").PasteSpecial Paste:=xlPasteValues
    ' 特殊粘贴（保留原来的样式）
    Range("K2").PasteSpecial Paste:=xlPasteFormats
```

### No.7 多个连续单元格时，获取最终列

```vba
Function GetNextMergedCell(startRange As Range) As Integer


    Dim currentRange As Range
    Dim EndColumn As Integer
    Set currentRange = startRange

    ' 如果当前range或者cell是合并单元格
    If currentRange.MergeCells Then
        ' 赋值合并单元格
        Dim mergeRange As Range
        Set mergeRange = currentRange.MergeArea
        ' 开始循环，直到移动到非合并单元格为止
        Do While mergeRange.MergeCells
            ' 移动到下一个合并单元格
            Set currentRange = mergeRange.Cells(1, mergeRange.Columns.Count + 1)
            Set mergeRange = currentRange.MergeArea
        Loop
    End If

    ' 由于最终是在非合并单元格退出循环的，需要减一
    EndColumn = currentRange.Column
    GetNextMergedCell = EndColumn - 1

End Function
```

### No.8 查找指定内容的位置

```vba
Sub FindStr()
    Dim str As String
    Dim rng As Range
    Dim target As Range
    str = "111"
    Set rng = ActiveSheet.Cells
    Set target = rng.Find(str)
    
    If Not target Is Nothing Then
        MsgBox target.Address
    Else
        MsgBox "notfind"
    End If
End Sub
```
