import { expressApp } from "./core/startup/server";

async function startup() {
  expressApp().then(app =>
    app.listen(process.env.PORT, ()=>
      console.log(`Server is listening on PORT ${process.env.PORT}`)
    )
  )
}

startup();