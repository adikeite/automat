ember build
git checkout gh-pages
cd dist
cp -arv . ..
cd ..
git add .
git commit -m "gh-pages update"
git reset --hard
git checkout master