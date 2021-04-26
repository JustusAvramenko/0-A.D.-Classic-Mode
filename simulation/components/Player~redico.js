Player.prototype.GetColor = function()
{
    //changes -Player1- blue to vivid blue, settings to return only with even numbers behind the decimal, e.g. 0.7 will not work
    if (this.color.r < 0.08236 && this.color.g < 0.21569 && this.color.b > 0.58430)
	    return { "r": 0, "g": 0.6, "b": 1, "a": 0 };
    //changes -Player2- red to vivid red
    if (this.color.r > 0.58823 && this.color.g < 0.07844 && this.color.b < 0.07844)
	    return { "r": 1, "g": 0, "b": 0, "a": 0 };
    //changes -Player3- green to vivid green
    if (this.color.r < 0.33726 && this.color.g > 0.70588 && this.color.b < 0.12157)
	    return { "r": 0, "g": 1, "b": 0, "a": 0 };
    //changes -Player4- yellow to vivid yellow
    if (this.color.r > 0.90588 && this.color.g > 0.78431 && this.color.b < 0.01961)
	    return { "r": 1, "g": 1, "b": 0, "a": 0 };
    //changes -Player5- cyan to vivid cyan
    if (this.color.r < 0.19608 && this.color.g > 0.66666 && this.color.b > 0.66666)
	    return { "r": 0.4, "g": 1, "b": 1, "a": 0 };
    //changes -Player6- violet to vivid violet
    if (this.color.r > 0.62745 && this.color.g < 0.31373 && this.color.b > 0.78431)
	    return { "r": 0.6, "g": 0, "b": 1, "a": 0 };
    //changes -Player7- orange to vivid orange
    if (this.color.r > 0.86274 && this.color.g < 0.45099 && this.color.b < 0.06275)
	    return { "r": 1, "g": 0.6, "b": 0, "a": 0 };
    //changes -Player8- grey to rose
    if (this.color.r < 0.25099 && this.color.g < 0.25099 && this.color.b < 0.25099)
	    return { "r": 1, "g": 0, "b": 0.6, "a": 0 };
    
    //changesDE -Player4- ORANGE-DelendaEst
    if (this.color.r > 0.99999 && this.color.g < 0.50197 && this.color.b < 0.00001)
	    return { "r": 1, "g": 0.4, "b": 0, "a": 0 };
    //changesDE -Player8- BROWN-DelendaEst
    if (this.color.r < 0.50197 && this.color.g < 0.25099 && this.color.b < 0.00001)
	    return { "r": 0.4, "g": 0.2, "b": 0, "a": 0 };
    else
        return this.color;
};

Player.prototype.GetDisplayedColor = function()
{
    //changes -Player1- blue to vivid blue
    if (this.displayDiplomacyColor)
        return this.diplomacyColor;
    else if (this.color.r < 0.08236 && this.color.g < 0.21569 && this.color.b > 0.58430)
        return { "r": 0, "g": 0.6, "b": 1, "a": 0 };
    //changes -Player2- red to vivid red
    if (this.displayDiplomacyColor)
        return this.diplomacyColor;
    else if (this.color.r > 0.58823 && this.color.g < 0.07844 && this.color.b < 0.07844)
        return { "r": 1, "g": 0, "b": 0, "a": 0 };
    //changes -Player3- green to vivid green
    if (this.displayDiplomacyColor)
        return this.diplomacyColor;
    else if (this.color.r < 0.33726 && this.color.g > 0.70588 && this.color.b < 0.12157)
        return { "r": 0, "g": 1, "b": 0, "a": 0 };
    //changes -Player4- yellow to vivid yellow
    if (this.displayDiplomacyColor)
        return this.diplomacyColor;
    else if (this.color.r > 0.90588 && this.color.g > 0.78431 && this.color.b < 0.01961)
        return { "r": 1, "g": 1, "b": 0, "a": 0 };
    //changes -Player5- cyan to vivid cyan
    if (this.displayDiplomacyColor)
        return this.diplomacyColor;
    else if (this.color.r < 0.19608 && this.color.g > 0.66666 && this.color.b > 0.66666)
        return { "r": 0.2, "g": 1, "b": 1, "a": 0 };
    //changes -Player6- violet to vivid violet
    if (this.displayDiplomacyColor)
        return this.diplomacyColor;
    else if (this.color.r > 0.62745 && this.color.g < 0.31373 && this.color.b > 0.78431)
        return { "r": 0.6, "g": 0, "b": 1, "a": 0 };
   //changes -Player7- orange to vivid orange
    if (this.displayDiplomacyColor)
        return this.diplomacyColor;
    else if (this.color.r > 0.86274 && this.color.g < 0.45099 && this.color.b < 0.06275)
        return { "r": 1, "g": 0.6, "b": 0, "a": 0 };
    //changes -Player8- grey to rose
    if (this.displayDiplomacyColor)
        return this.diplomacyColor;
    else if (this.color.r < 0.25099 && this.color.g < 0.25099 && this.color.b < 0.25099)
        return { "r": 1, "g": 0, "b": 0.6, "a": 0 };
    
    //changesDE -Player4- ORANGE-DelendaEst
    if (this.displayDiplomacyColor)
        return this.diplomacyColor;
    else if (this.color.r > 0.99999 && this.color.g < 0.50197 && this.color.b < 0.00001)
	    return { "r": 1, "g": 0.4, "b": 0, "a": 0 };
    //changesDE -Player8- BROWN-DelendaEst
    if (this.displayDiplomacyColor)
        return this.diplomacyColor;
    else if (this.color.r < 0.50197 && this.color.g < 0.25099 && this.color.b < 0.00001)
	    return { "r": 0.4, "g": 0.2, "b": 0, "a": 0 };
    
    else
        return this.color;
	//return this.displayDiplomacyColor ? this.diplomacyColor : this.color;
};

Engine.ReRegisterComponentType(IID_Player, "Player", Player);
