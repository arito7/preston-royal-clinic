# Preston Royal Clinic

build

```
bundler exec jekyll build
```

force push to gh-pages

```
# you can avoid this line if you are in master.
git checkout main
```

```
# create a local gh-pages branch containing the splitted output folder
git subtree split --prefix _site -b gh-pages
```

```
# force the push of the gh-pages branch to the remote gh-pages branch at origin
git push -f origin gh-pages:gh-pages
```

```
# delete the local gh-pages because you will need it: ref
git branch -D gh-pages
```
