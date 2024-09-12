different(red, green).
different(red, blue).
different(green, red).
different(green, blue).
different(blue, red).
different(blue, green).

coloring(Al, Mi, Geo, Ten, Flo) :- 
different(Mi, Ten), 
different(Mi, Al), 
different(Al, Ten), 
different(Al, Al), 
different(Al, Geo), 
different(Al, Flo), 
different(Geo, Flo), 
different(Geo, Ten).