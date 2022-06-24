# preston-royal-clinic

build

```
bundler exec jekyll build
```

force push to gh-pages

```
git checkout master # you can avoid this line if you are in master.
```

# create a local gh-pages branch containing the splitted output folder

```
git subtree split --prefix dist -b gh-pages
```

git push -f origin gh-pages:gh-pages

# force the push of the gh-pages branch to the remote gh-pages branch at origin

git branch -D gh-pages

# delete the local gh-pages because you will need it: ref
