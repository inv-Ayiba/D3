
pallete = ["#0400ff", "#00FF00", "#FFFF00", "#FF7F00", "#4B0082", "#FF0000","#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"]



videogames = ["Wii","DS","X360","GB","PS3","NES","PS2","3DS","PS4","SNES","PS","N64","GBA","XB","PC","2600","PSP","XOne"]
movies=["Action","Adventure","Comedy","Drama","Animation","Family","Biography"]
kickstarter=["Product Design","Tabletop Games","Video Games","Technology","Hardware","Sound","Gaming Hardware","Narrative Film","3D Printing","Television","Web","Wearables","Food","Games","Sculpture","Apparel","Art","Gadgets"]

# print(len(videogames),len(movies),len(kickstarter))

take=[]
for i in range(7):
    take.append(pallete[i])
print(take)