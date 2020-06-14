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
  9. 将多个分支的提交合并成一个: git rebase -i start_commit_id end_commmit_id?,这样的话就可以将从开始提交的commit合并成一个commit。但是这仅仅是限于自己功能分支的整理，一旦已经将自己的分支合并到公共分之后就不建议这样操作。如果结束commit没有的话，那么默认就是当前的最新的commit
  10. 将间隔的几个commit也合并成一个commit，同样是使用git rebase -i start_commit_id end_commmit_id?，这里需要手动将需要合并的几个commit放到一起，使用squash命令将commit合并到之前的commit中
  11. 比较暂存区和HEAD文件的差异：git diff --cached
      比较工作区和暂存区文件的差异：git diff
      比较工作区和HEAD之间的差异：git diff HEAD
  12. 取消暂存区的内容保持和HEAD一致：git reset HEAD,如果加了--hard，那么工作区和暂存区都恢复成HEAD，不加--hard那么仅仅是暂存区恢复成了HEAD，工作区不变  
     将工作区的内容恢复和暂存区一致：git checkout -- file  
     回退到某一个提交节点：git reset --hard pre_commit_id,这样的话工作区和暂存区就都回退到了pre_commit_id提交的内容
  13. 比较两次提交之间的不同，两个分支的不同: git diff commit1_id commit2_id file_name?   
      git diff branch_name_1 branch_name_2 file_name?
  14. git删除文件：git rm file_name,这样的话Git就会直接把这个删除的文件放到暂存区
  15. git储藏, git stash save message; git stash pop id; git stash appply id;
    git stash drop id;
## git, tre, blob的关系
  1. git每一次的commit都会对应一颗tree,这棵树就是本次提交是项目中所有文件的快照，tree下面会嵌套tree和blob，tree对应的就是一个个文件夹，而blob对应就是文件。但是git对于文件做了优化处理，在多次提交中不管文件名叫什么，主要是文件内容相同的都都存储为同一个blob文件，这样就大大节省了内容。
  2. git运行原理：当我们对项目文件进行更新之后，提交的时候git会扫描当前项目结构创建一个tree并按照文件夹和文件的不通过类型将tree和blob放入到这颗树中，之后再封装到一个commit中完成本次的提交。在将来如果我们希望回退到某一个版本的话，那么我们可以根据某一次提交的id，git会根据这个唯一的id找到这个tree，然后根据这个tree组件对仓库进行还原，整个过程都是以hash和二进制的方式进行的，所以Git的效率非常高。