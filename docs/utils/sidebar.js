const glob = require("glob")
const path = require("path")


 const files = glob.sync("**/*.md", {cwd: path.resolve(__dirname, '../pages')})

 const categorys = {}

 files.forEach(f => {
   const matchRes = f.match(/^.+?\//)
   if(matchRes) {
    const cg = matchRes[0].slice(0,-1)
    if (categorys[cg]) categorys[cg].push(f)
    else categorys[cg] = [f]
   }
 })

 const  sidebar = Object.entries(categorys).map(entry => ({
   title: entry[0],
   children: entry[1].map(it => `/pages/${it}`)
 }))

 console.log('sidebar', sidebar)

 module.exports = sidebar