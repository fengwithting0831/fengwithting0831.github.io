cd "C:\Users\chbon\OneDrive\Documents\ty11\demo-eleventy-from-scratch-blog"
git init
git add .
git commit -m "20250804 v1"
git remote add origin https://github.com/fengwithting0831/fengwithting0831.github.io.git
git checkout -b main
git push -u origin main --force
explorer   http://localhost:8080/
npx @11ty/eleventy --serve