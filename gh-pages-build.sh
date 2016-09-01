ember build
git checkout gh-pages
git pull
cd dist
cp -arv . ..
cd ..
git add .
git commit -m "gh-pages update"
git push
git reset --hard
git checkout master
