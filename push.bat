@echo off
cd /d "C:\Users\岳雅鹏\.claude\projects\fitness-app\fitness-app\dist"

:: 在这里粘贴你的 GitHub Token（替换下面这行）
set GH_TOKEN=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YOUR_TOKEN_HERE

echo Pushing...
git init 2>nul
git config user.email "deploy@fitness.app"
git config user.name "deploy"
git add -A
git commit -m "v1.2" 2>nul
git -c http.proxy="" -c https.proxy="" push https://%GH_TOKEN%:x-oauth-basic@github.com/availe967/fitness-app.git master:main --force
echo Done!
pause
