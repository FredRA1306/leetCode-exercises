class TreeNode (object):
    def __init__(self, val = 0, left = None, right = None):
      self.val = val
      self.left = left
      self.right = right

class Solution (object):
  def findMode(self, root):
      occurence ={}

      if root != None:
        self.findMode(root.left)
        if root.val in occurence:
            occurence[root.val] += 1
        else: 
          occurence[root.val] = 1
        self.findMode(root.right)
      
      return occurence
  
