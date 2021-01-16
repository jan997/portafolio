$host.ui.rawui.windowtitle="TabBuild"

write "###############################################"
write "Borrando old build"
write "###############################################"
Remove-Item docs -recurse

write " "

#write "Nuva build"
#tsc --build

cd "client"

write "###############################################"
write "Nueva build del cliente"
write "###############################################"
npm run-script build

write "###############################################"
write "La momemos a la build del servidor"
write "###############################################"
move build ../docs

cd ..

# cd "node"

# write "###############################################"
# write "Iniciamos el servidor"
# write "###############################################"
# npm start
# pause

