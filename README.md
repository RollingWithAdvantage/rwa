# Rolling With Advantage

## Getting Started

1. Install the proper version of Node (5.11.x)
2. Install Node dependencies `npm install`
3. Install Nodemon using `npm install -g nodemon`
4. Install Foreman using `npm install -g foreman`
5. Add `MONGODB_CONNECT_STRING=[the_connect_string]` to `.env`
    1. dunno how this works, so... create env.json with this:
    
            { 
                "MONGODB_CONNECT_STRING" : "mongodb://theserver"
            }
        
6. Use `nodemon --exec "nf start"` to fire up the server
