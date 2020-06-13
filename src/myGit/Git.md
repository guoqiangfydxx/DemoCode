# git
## git command
  1. git add . 和 git add -A提交修改，删除和新增的文件，只不过所在目录不同他们的效果稍微有些不同，-a是提交了整个仓库的改变，git add .只提交当前目录及其子目录下的文件
  2. git add -u,提交的是修改和删除的文件，其并不管控新增的文件
  3. git mv source destination,重命名文件
  4. git log查看历史提交记录
    git log --all 查看本地所有分支的提交记录
    git log --graph 提交记录图形化
    git log -n4 查看最近的几条提交记录
    git log --oneline 简略版的提交记录
  5. git cat-file -t 查看文件类型
    git cat-file -p 查看文件的内容
    git cat-file -s 查看文件的大小
  6. 删除分支
    git branch -d branch_name 删除分支  
    git branch -D brnach_name 强制删除分支
    -d 删除的时候会判断删除的分支是否合并到了其他分支，如果没有的话直接删除git认为这是危险的，因为你可能把一个功能直接删除掉了。但是其也提供了-D的功能用来强制删除
  7. 修改最新一次的commit的message，git commit --amend就可以修改
  8. 修改任何一次提交的message， git rebase -i parent_commit_id,但是一般不建议这样来做，因为commit中包含了author，parent，message等消息，如果修改了其message的话，那么git就会认为这个是一个新的commit，而其子节点的parent属性指向它的发生了变化，那么后面所有的commit都会发生连锁反应，这样对于后面的历史追溯等都是不利的。
## git, tre, blob的关系
  1. git每一次的commit都会对应一颗tree,这棵树就是本次提交是项目中所有文件的快照，tree下面会嵌套tree和blob，tree对应的就是一个个文件夹，而blob对应就是文件。但是git对于文件做了优化处理，在多次提交中不管文件名叫什么，主要是文件内容相同的都都存储为同一个blob文件，这样就大大节省了内容。
  2. git运行原理：当我们对项目文件进行更新之后，提交的时候git会扫描当前项目结构创建一个tree并按照文件夹和文件的不通过类型将tree和blob放入到这颗树中，之后再封装到一个commit中完成本次的提交。在将来如果我们希望回退到某一个版本的话，那么我们可以根据某一次提交的id，git会根据这个唯一的id找到这个tree，然后根据这个tree组件对仓库进行还原，整个过程都是以hash和二进制的方式进行的，所以Git的效率非常高。