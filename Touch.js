function isTouching(object1,object2){
    if(Group1.x-Group2.x < Group2.width/2 + Group1.width/2
        && Group2.x-Group1.x < Group2.width/2 + Group1.width/2
        && Group1.y-Group2.y < Group2.height/2 + Group1.height/2
        && Group2.y-Group1.y < Group2.height/2 + Group1.height/2 ){
            return true;
        }
        
            else{
                return false ; 
            }
        }