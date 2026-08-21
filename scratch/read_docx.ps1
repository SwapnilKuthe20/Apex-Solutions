Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead('supplied_materials/Apex_Animation_and_Effects_System.docx')
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$content = $reader.ReadToEnd()
$stream.Close()
$zip.Dispose()

# Simple regex to strip XML tags
$text = $content -replace '<[^>]+>', ' '
$text = $text -replace '\s+', ' '
Set-Content -Path 'scratch/docx_content.txt' -Value $text
Write-Output "Extracted $($text.Length) characters."
