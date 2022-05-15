import random
pallete = ["#0400ff", "#00FF00", "#FFFF00", "#FF7F00", "#4B0082", "#FF0000","#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"]



videogamesCategories = ["Wii","DS","X360","GB","PS3","NES","PS2","3DS","PS4","SNES","PS","N64","GBA","XB","PC","2600","PSP","XOne"]
videogamesColor = ['#c7c7c7', '#98df8a', '#bcbd22', '#dbdb8d', '#FF7F00', '#9467bd', '#ffbb78', '#4B0082', '#c49c94', '#8c564b', '#FF0000', '#9edae5', '#aec7e8', '#2ca02c', '#00FF00', '#f7b6d2', '#1f77b4', '#ff9896']

moviesCategories=["Action","Adventure","Comedy","Drama","Animation","Family","Biography"]
moviesColor = ['#d62728', '#ff9896', '#dbdb8d', '#9edae5', '#8c564b', '#4B0082', '#c49c94']

kickstarterCategories =["Product Design","Tabletop Games","Video Games","Technology","Hardware","Sound","Gaming Hardware","Narrative Film","3D Printing","Television","Web","Wearables","Food","Games","Sculpture","Apparel","Art","Gadgets"]
kickstarterColor = ['#dbdb8d', '#00FF00', '#f7b6d2', '#7f7f7f', '#ff9896', '#c49c94', '#c5b0d5', '#1f77b4', '#98df8a', '#17becf', '#e377c2', '#9467bd', '#ff7f0e', '#9edae5', '#FF0000', '#4B0082', '#d62728', '#0400ff']
# print(len(videogames),len(movies),len(kickstarter))

take=[]
count=0
while len(take)<7:
    ran = pallete[random.randint(0,len(pallete)-1)]
    try: 
        nonn= (take.index(ran))
    except(ValueError):
        count+=1
        take.append(ran)
print(take)
print(count)
#     # take.append()

# print(take.index(1))