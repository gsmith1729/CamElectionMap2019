wards=["Trumpington", "Queen Edith's", "Cherry Hinton", "Coleridge", "Newnham", "Castle", "Market", 
			"Petersfield", "Romsey", "West Chesterton", "King's Hedges", "East Chesterton", "Abbey", "Arbury"]
ld="#FAA61A"
lab="red"
result=[ld,ld,lab,lab,ld,ld,ld,lab,lab,ld,lab,lab,lab,lab]
for (i=0;i<14;i++){
    document.getElementById(wards[i]).style.fill=result[i]
    
}