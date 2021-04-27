import server from "./core/startup/server";

async function startup() {
    server.listen(process.env.PORT, ()=>
      console.log(`Server is listening on PORT ${process.env.PORT}`)
    )
}

startup();