@echo off
setlocal enabledelayedexpansion

set "output=articlesIndex.json"

echo [> "%output%"

set first=1

for /d %%D in (*) do (
    if !first! equ 1 (
        set first=0
    ) else (
        >> "%output%" echo ,
    )
    >> "%output%" echo     "%%D"
)

echo ]>> "%output%"
echo Archivo "%output%" generado correctamente.
exit