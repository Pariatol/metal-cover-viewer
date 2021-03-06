
import React, { Component } from 'react'
import './App.css'

const covers = [
  {
    img:"https://www.spirit-of-metal.com/cover.php?id_album=373207",
    band:"Urn",
    album:"Iron Will Of Power"
    
  },
  {
    img:"https://f4.bcbits.com/img/a3507910553_5.jpg",
    band:"Loudblast",
    album:"Sublime Dementia"
  },
  {
    img:"https://www.coreandco.fr/upload/pics/albums2/big/loudblast-cross-the-threshold-6292.jpg",
    band:"Loudblast",
    album:"Cross The Threshold"
  },
  {
    img:"https://www.paris-move.com/wp-content/uploads/2018/08/carnation-2.jpg",
    band:"Carnation",
    album:"Chapel Of Abhorrence"
  },
  {
    img:"https://www.coreandco.fr/upload/pics/albums2/big/revocation-the-outer-ones-7089.jpg",
    band:"Revocation",
    album:"The Outer Ones"
  },
  {
    img:"https://www.coreandco.fr/upload/pics/albums2/big/uada-cult-of-a-dying-sun--7187.jpg",
    band:"Uada",
    album:"Cult Of A Dying Sun"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/81r1LaN2pWL._SL1500_.jpg",
    band:"Iron Maiden",
    album:"The Trooper"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/81VxO9sHLfL._SL1300_.jpg",
    band:"Iron Maiden",
    album:"Virtual XI"
  },
  {
    img:"https://media.senscritique.com/media/000004822680/source_big/Brave_New_World.jpg",
    band:"Iron Maiden",
    album:"Brave New World"
  },
  {
    img:"https://m.media-amazon.com/images/I/81nZXD061gL._SS500_.jpg",
    band:"Iron Maiden",
    album:"Somewhere In Time"
  },
  {
    img:"https://m.media-amazon.com/images/I/81MddQXH3WL._SS500_.jpg",
    band:"Iron Maiden",
    album:"Dance Of Death"
  },
  {
    img:"https://f4.bcbits.com/img/a0215997918_5.jpg",
    band:"Manilla Road",
    album:"Playground Of The Damned"
  },
  {
    img:"https://www.nawakulture.fr/images/manillaroad-crystal.jpg",
    band:"Manilla Road",
    album:"Crystal Logic"
  },
  {
    img:"https://f4.bcbits.com/img/a3821848103_16.jpg",
    band:"Manilla Road",
    album:"The Courts Of Chaos"
  },
  {
   img:"https://images-na.ssl-images-amazon.com/images/I/81Jlq1-q5dL._SL1500_.jpg",
    band:"Manilla Road",
    album:"The Deluge"
  },
  {
    img:"https://www.rockadrome.com/store/images/detailed/17/manilla-road-mark-of-the-beast-lp-front_opt.jpg",
    band:"Manilla Road",
    album:"Mark Of The Beast"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/61cT9wm9ovL.jpg",
    band:"Manilla Road",
    album:"Open The Gates"
  },
  {
    img:"https://www.spirit-of-metal.com/cover.php?id_album=362148",
    band:"Mystifier",
    album:"Protogoni Mavri Magiki Dynasteia"
  },
  {
    img:"https://m.media-amazon.com/images/I/A1tX6jIgI-L._SS500_.jpg",
    band:"Manilla Road",
    album:"Mystification"
  },
  {
    img:"https://www.udiscovermusic.com/wp-content/uploads/2017/03/Metallica-Ride-The-Lightning-album-cover-web-optimised-820.jpg",
    band:"Metallica",
    album:"Ride The Lightning"
  },
  {    img:"https://critiquedesalon.files.wordpress.com/2015/07/destroy-erase-improve-messhuggah.jpg",
    band:"Meshuggah",
    album:"Future Breed Machine"
  },
  {    img:"https://www.ilikeyouroldstuff.com/sites/g/files/g2000007366/files/inline-images/The-Number-Of-The-Beast_0.jpg",
    band:"Iron Maiden",
    album:"The Number Of The Beast"
  },
  {  img:"http://www.progarchives.com/progressive_rock_discography_covers/2629/cover_39361230102016_r.jpg",
    band:"Iron Maiden",
    album:"Fear Of The Dark"
  },
  {  img:"https://img.discogs.com/oK9k2CFTAlEBYROAG0dX2krneNM=/fit-in/595x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-381258-1254036337.jpeg.jpg",
    band:"Iron Maiden",
    album:"Killers"
  },
  {  
    img:"https://images-na.ssl-images-amazon.com/images/I/81ac5d5%2BsCL._SL1500_.jpg",
    band:"Iron Maiden",
    album:"Iron Maiden"
  },
  {      img:"http://www.progarchives.com/progressive_rock_discography_covers/2629/cover_2425930102016_r.jpg",
    band:"Iron Maiden",
    album:"Piece Of Mind"
  },
   {      img:"http://www.progarchives.com/progressive_rock_discography_covers/2629/cover_2425930102016_r.jpg",
    band:"Iron Maiden",
    album:"Piece Of Mind"
  },
  {      
    img:"https://i.redd.it/m7rmurlcld8y.jpg",
    band:"Iron Maiden",
    album:"Seventh Son Of A Seventh Son"
  },
  {    img:"https://i.pinimg.com/originals/ae/f6/ea/aef6ea029d6ef665fce29935fe40ed1f.jpg",
    band:"Megadeth",
    album:"Rust In Peace"
  },
  {    img:"https://media.senscritique.com/media/000004847579/source_big/Peace_Sells_but_Who_s_Buying.jpg",
    band:"Megadeth",
    album:"Peace Sells... But Who's Buying ?"
  },
  {    img:"https://www.nuclearblast.de/static/articles/122/122932.jpg/1000x1000.jpg",
    band:"Megadeth",
    album:"Youthanasia"
  },
  {
    img:"https://www.coreandco.fr/upload/pics/albums2/big/blut-aus-nord-hallucinogen-7453.jpg",
    band:"Blut Aus Nord",
    album:"Hallucinogen"
  },
  {
    img:"https://media.senscritique.com/media/000004856842/source_big/Memoria_Vetusta_I_Fathers_of_the_Icy_Age.jpg",
    band:"Blut Aus Nord",
    album:"Fathers Of The Icy Age"
  },
  {
    img:"https://img.discogs.com/E0ILUwjFP_CadRPCP-8bKqOQ98Y=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6162537-1412624262-3954.jpeg.jpg",
    band:"Blut Aus Nord",
    album:"Memoria Vetusta III : Saturnian Poetry"
  },
  {    img:"https://www.nuclearblast.de/static/articles/129/129044.jpg/1000x1000.jpg",
    band:"Meshuggah",
    album:"Catch 33"
  },
  {
    img:"https://www.nuclearblast.de/static/articles/192/192733.jpg/1000x1000.jpg",
    band:"Meshuggah",
    album:"Koloss"
  },
  {
    img:"https://media.senscritique.com/media/000004824602/source_big/Nothing.jpg",
    band:"Meshuggah",
    album:"Nothing"
  },
  {
    img:"https://www.coreandco.fr/upload/pics/albums2/big/cattle-decapitation-death-atlas-7496.jpg",
    band:"Cattle Decapitation",
    album:"Death Atlas"
  },
  {
    img:"https://f4.bcbits.com/img/a2982924713_10.jpg",
    band:"Emperor",
    album:"In The Nightside Eclipse"
  },
  {
    img:"https://img.discogs.com/Fkp4T4pwvGuFEQ8H8xQLgDlj-aE=/fit-in/600x592/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-372997-1360266429-1708.jpeg.jpg",
    band:"Emperor",
    album:"Anthems To The Welkin At Dusk"
  },
  {
    img:"https://img.discogs.com/IinWFu5hlEAWSK8Bpj8CnZQhkZ8=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-378293-1145630512.jpeg.jpg",
    band:"Dissection",
    album:"Storm Of The Light's Bane"
  },
  {
    img:"https://www.nuclearblast.de/static/articles/291/291293.jpg/1000x1000.jpg",
    band:"Dissection",
    album:"The Somberlain"
  },
  {
    img:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Filosofem.jpg",
    band:"Burzum",
    album:"Filosofem"
  },
  {
    img:"https://img.discogs.com/0jn7lA-8D8szxOeLPSgPHjWDcSk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-413444-1322302253.jpeg.jpg",
    band:"Burzum",
    album:"Burzum"
  },
  {
    img:"https://www.spirit-of-metal.com/cover.php?id_album=395",
    band:"Burzum",
    album:"Hvis Lyset Tar Oss"
  },
  {
    img:"https://m.media-amazon.com/images/I/91a0gh7ntDL._SS500_.jpg",
    band:"Gatecreeper",
    album:"Deserted"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/911aTI-HqsL._SL1500_.jpg",
    band:"Gatecreeper",
    album:"Sonoran Depravation"
  },
  {
    img:"https://img.discogs.com/hXk3osyaScW6TWCmpvQCjYHkPf8=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10957084-1507753652-9124.jpeg.jpg",
    band:"Gojira",
    album:"From Mars To Sirius"
  },
  {
    img:"https://media.senscritique.com/media/000004851025/source_big/L_Enfant_sauvage.jpg",
    band:"Gojira",
    album:"L'Enfant Sauvage"
  },
  {
    img:"http://www.progarchives.com/progressive_rock_discography_covers/2516/cover_56594132019_r.jpg",
    band:"Gojira",
    album:"The Link"
  },
  {
    img:"https://media.cultura.com/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/t/h/the-way-of-all-flesh-3760053841070_0.jpg?t=1509588207",
    band:"Gojira",
    album:"The Way Of All Flesh"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/819tJX9-DzL._SL1425_.jpg",
    band:"Gojira",
    album:"Magma"
  },
  {
    img:"https://img.cdandlp.com/2016/04/imgL/118143587.jpg",
    band:"Amon Amarth",
    album:"Jomsviking"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/91w-mtJ%2BmHL._SL1500_.jpg",
    band:"Amon Amarth",
    album:"Twilight Of The Thunder God"
  },
  {
    img:"https://i0.wp.com/www.daily-rock.fr/wp-content/uploads/2014/11/1069925_608463959187373_1209687843_n2.jpg",
    band:"Amon Amarth",
    album:"Deceiver Of The Gods"
  },
  {
    img:"https://i.pinimg.com/originals/df/f7/83/dff783bfa937c15635c8cc872615c317.jpg",
    band:"Darkthrone",
    album:"Transilvanian Hunger"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/512Kc8UDbKL.jpg",
    band:"Darkthrone",
    album:"A Blaze In The Northern Sky"
  },
  {
    img:"http://img.over-blog-kiwi.com/0/99/50/54/20190604/ob_bfc21b_713317.jpg",
    band:"Darkthrone",
    album:"Old Star"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/71IqHQNfOBL._SL1200_.jpg",
    band:"Darkthrone",
    album:"Artic Thunder"
  },
  {
    img:"https://www.nuclearblast.de/static/articles/145/145976.jpg/1000x1000.jpg",
    band:"Annihilator",
    album:"Alice In Hell"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/61iEix8TL7L.jpg",
    band:"Crowbar",
    album:"Time Heals Nothing"
  },
  {
    img:"https://www.coreandco.fr/upload/pics/albums2/big/rivers-of-nihil-where-owls-know-my-name-6948.jpg",
    band:"Rivers Of Nihil",
    album:"Where Owls Know My Name"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/81p%2BiHCxi1L._SL1500_.jpg",
    band:"Rivers Of Nihil",
    album:"The Conscious Seed Of Light"
  },
  {
    img:"https://i2.cdscdn.com/pdt2/7/2/7/1/700x700/uni5051099768727/rw/smear-campaign-by-napalm-death.jpg",
    band:"Napalm Death",
    album:"Smear Campaign"
  },
  {
    img:"https://2.bp.blogspot.com/-1qvAOD3rgGg/WVFGa9HR-fI/AAAAAAAABlU/zKBvW1ZWDZI5q7fIjOcbIjZCNlU2ErXpgCLcBGAs/s1600/Nokturnal%2BMortum%2B-%2BVerity.jpg",
    band:"Nokturnal Mortum",
    album:"Verity"
  },
  {
    img:"https://img.discogs.com/Cuy0hfQFgn5kJEynf9rUeW1T8m4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6644449-1423744411-8381.jpeg.jpg",
    band:"Nokturnal Mortum",
    album:"Twilightfall"
  },
  {
    img:"https://f4.bcbits.com/img/a4185838756_10.jpg",
    band:"Nokturnal Mortum",
    album:"Lunar Poetry"
  },
  {
    img:"https://media.senscritique.com/media/000004824350/source_big/Arntor.jpg",
    band:"Windir",
    album:"Arntor"
  },
  {
    img:"https://i.imgur.com/OEVROrB.jpg",
    band:"Bathory",
    album:"Blood Fire Death"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/912ojqhhxmL._SL1500_.jpg",
    band:"Death",
    album:"Scream Bloody Gore"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/91KTpHZ4KqL._SL1500_.jpg",
    band:"Death",
    album:"Spiritual Healing"
  },
  {
    img:"https://d9nvuahg4xykp.cloudfront.net/30102403662291088/5895753364417011454.jpg",
    band:"Death",
    album:"Leprosy"
  },
  {
    img:"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/8c/d7/c7/8cd7c72d-1638-1cae-8f4f-86c6195c13e5/source/1200x1200bb.jpg",
    band:"Death",
    album:"The Sound Of Perseverance"
  },
  {
    img:"https://media.senscritique.com/media/000004865499/source_big/Those_of_the_Unlight.jpg",
    band:"Marduk",
    album:"Those Of The Unlight"
  },
  {
    img:"https://media.senscritique.com/media/000018725196/source_big/Age_of_Excuse.jpg",
    band:"Mgla",
    album:"Age Of Excuse"
  },
  {
    img:"https://i.pinimg.com/564x/f9/c8/42/f9c8429c10ae9e033981b97952f17dad.jpg",
    band:"Mgla",
    album:"Exercises In Futility"
  },
  {
    img:"https://f4.bcbits.com/img/a2470470726_10.jpg",
    band:"Stillbirth",
    album:"Annihilation Of Mankind"
  },
  {
    img:"http://www.heretik-magazine.fr/wp-content/uploads/2018/05/Gruesome.jpg",
    band:"Gruesome",
    album:"Twisted Prayers"
  },
  {
    img:"https://www.coreandco.fr/upload/pics/albums2/big/skeletal-remains-devouring-mortality-6703.jpg",
    band:"Skeletal Remains",
    album:"Devouring Mortality"
  },
  {
    img:"https://www.nuclearblast.de/static/articles/242/242602.jpg/1000x1000.jpg",
    band:"Skeletal Remains",
    album:"Condemned To Misery"
  },
  {
    img:"https://www.victoriusmetal.net/wp-content/themes/framework/dist/images/cd.png",
    band:"Victorius",
    album:"Space Ninjas From Hell"
  },
  {
    img:"https://www.coreandco.fr/upload/pics/albums2/big/broken-hope-mutilated-and-assimilated-6356.jpg",
    band:"Broken Hope",
    album:"Mutilated And Assimilated"
    
  },
  {
    img:"https://f4.bcbits.com/img/a1986601359_10.jpg",
    band:"Hideous Divinity",
    album:"Adveniens"
  },
  {
    img:"http://www.hornsup.fr/uploads/files/NEWS/2017/septembre/druid2.png",
    band:"Druid Lord",
    album:"Grotesque Offerings"
  },
  {
    img:"https://f4.bcbits.com/img/a2473370893_10.jpg",
    band:"Traces Of War",
    album:"Traces Of War"
  },
  {
    img:"https://www.metalorgie.com/alb_thumb/6/Mastodon_2014_OnceMoreRoundTheSun_cover.jpg",
    band:"Mastodon",
    album:"Once More Round The Sun"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/81jKvgNDwNL._SL1393_.jpg",
    band:"Mastodon",
    album:"Emperor Of Sand"
  },
  {
    img:"https://consequenceofsound.net/wp-content/uploads/2019/08/Mstodon-Leviathan.jpg?quality=80&w=807",
    band:"Mastodon",
    album:"Leviathan"
  },
  {
    img:"http://www.cridutroll.fr/wp-content/uploads/2017/10/Mastodon_2017_ColdDarkPlace_cover.jpg",
    band:"Mastodon",
    album:"Cold Dark Place"
  },
  {
    img:"https://m.media-amazon.com/images/I/91gqqo8g8VL._SS500_.jpg",
    band:"Dissection",
    album:"Maha Kali (single)"
  },
  {
    img:"https://f4.bcbits.com/img/a1881891156_10.jpg",
    band:"Regarde Les Hommes Tomber",
    album:"Exile"
  },
  {
    img:"https://img.discogs.com/G7x0A8Ce0hLfFt2s7WVVIOwuHL8=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2330585-1295030353.jpeg.jpg",
    band:"Watain",
    album:"Lawless Darkness"
  },
  {
    img:"https://i2.wp.com/www.metal-franche-comte.info/wp-content/uploads/2015/04/1000x1000.jpg",
    band:"Immortal",
    album:"At The Heart Of Winter"
  },
  {
    img:"https://hardforce.com/img/uploads/Posts/2019/02/HardForce-blog-424.jpg",
    band:"Gaahls Wyrd",
    album:"Ghosts Invited"
  },
  {
    img:"https://www.udiscovermusic.com/wp-content/uploads/2019/07/Marilyn-Manson-Portrait-Of-An-American-Family-album-cover-820.jpg",
    band:"Marylin Manson",
    album:"Portrait Of An American Family"
  },
  {
    img:"https://i.pinimg.com/originals/3b/c0/81/3bc08179078e30509ff295c196a112cc.jpg",
    band:"Saxon",
    album:"Crusader"
  },
  {
    img:"http://sonsofmetaldotcom.files.wordpress.com/2014/07/cover.jpg?w=788",
    band:"Grave Digger",
    album:"Return Of The Reaper"
  },
  {
    img:"http://www.hornsup.fr/uploads/files/NEWS/2018/Juin/theliving.jpg",
    band:"Grave Digger",
    album:"The Living Dead"
  },
  {
    img:"https://img.discogs.com/O-kjAM6a4dZF9y2mdw7KoIuXDzY=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2807503-1401555738-6068.jpeg.jpg",
    band:"Grave Digger",
    album:"Rheingold"
  },
  {
    img:"http://www.hornsup.fr/uploads/files/NEWS/2016/Septembre/gravedigger17.jpg",
    band:"Grave Digger",
    album:"Healed By Metal"
  },
  {
    img:"https://rukminim1.flixcart.com/image/1664/1664/av-media/music/x/s/a/the-grave-digger-original-imad4b2st7euc3s6.jpeg?q=90",
    band:"Grave Digger",
    album:"The Grave Digger"
  },
  {
    img:"https://hardrock80fr.files.wordpress.com/2019/01/cover-2.jpg?w=616",
    band:"Powerwolf",
    album:"Metalum Nostrum"
  },
  {
    img:"http://www.hornsup.fr/uploads/files/NEWS/2018/Avril/29683170_1788669624519113_4674399340991668344_n.jpg",
    band:"Powerwolf",
    album:"The Sacrament Of Sin"
  },
  {
    img:"https://i.pinimg.com/736x/f2/11/0c/f2110cb907d081eff7886e39e6abd29b.jpg",
    band:"Powerwolf",
    album:"Demons Are A Girl's Best Friend"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/91Vc6ZS1kQL._SL1500_.jpg",
    band:"Powerwolf",
    album:"Blessed And Possessed"
  },
  {
    img:"http://www.progarchives.com/progressive_rock_discography_covers/3056/cover_1846152542017_r.jpg",
    band:"Blind Guardian",
    album:"Battalions Of Fear"
  },
  {
    img:"http://www.progarchives.com/progressive_rock_discography_covers/3056/cover_2120162542017_r.jpg",
    band:"Blind Guardian",
    album:"Follow The Blind"
  },
  {
    img:"http://www.animatedcovers.com/wp-content/uploads/2016/05/Blind-Guardian-Nightfall-in-Middle-Earth-Animated-Album-Cover-GIF-gap.jpg",
    band:"Blind Guardian",
    album:"Nightfall in Middle Earth"
  },
  {
    img:"https://media.senscritique.com/media/000004901780/source_big/Ensiferum.jpg",
    band:"Ensiferum",
    album:"Ensiferum"
  },
  {
    img:"http://images.music-story.com/img/album_E/ensiferum-unsung-heroes.jpg",
    band:"Ensiferum",
    album:"Unsung Heroes"
  },
  {
    img:"https://www.spirit-of-metal.com/cover.php?id_album=1470",
    band:"Morbid Angel",
    album:"Altars Of Madness"
  },
  {
    img:"https://boulevardbrutal.files.wordpress.com/2016/08/sp044.jpg?w=1112",
    band:"Forteresse",
    album:"Thèmes Pour La Rébellion"
  },
  {
    img:"https://www.spirit-of-metal.com/cover.php?id_album=352732",
    band:"Wytch Hazel",
    album:"II:Sojourn"
  },
  {
    img:"https://desert-rock.com/dr/chrocd/files/2015/03/Ecate.jpg",
    band:"Ufomammut",
    album:"Ecate"
  },
  {
    img:"http://bandmill.net/wp-content/uploads/2017/12/Arch-Enemy-Will-to-power.jpg",
    band:"Arch Enemy",
    album:"Will To Power"
  },
  {
    img:"https://i.pinimg.com/originals/f8/d4/03/f8d4031c1d3d562adb5a5dcd8941e0fd.jpg",
    band:"Arch Enemy",
    album:"War Eternal"
  },
  {
    img:"http://valkyrieswebzine.com/wp-content/uploads/2018/11/a1673438340_10.jpg",
    band:"1914",
    album:"The Blind Leading The Blind"
  },
  {
    img:"https://m.media-amazon.com/images/I/81CD3-cUakL._SS500_.jpg",
    band:"Children Of Bodom",
    album:"Follow The Reaper"
  },
  {
    img:"https://i.pinimg.com/originals/d2/11/ce/d211ce90ecafb901f13ae8c96520281f.jpg",
    band:"Manowar",
    album:"The Triumph Of Steel"
  },
  {
    img:"https://i.pinimg.com/originals/70/a7/f5/70a7f5490d6116537ab49fb299c97a15.jpg",
    band:"Manowar",
    album:"Blow Your Speakers"
  },
  {
    img:"https://img.discogs.com/ogX_t5D8Q8r58kECtembLBGOAnE=/fit-in/600x594/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-501210-1468698525-7509.jpeg.jpg",
    band:"Dio",
    album:"Holy Diver"
  },
  {
    img:"https://www.udiscovermusic.com/wp-content/uploads/2019/07/Anthrax-Spreading-The-Disease-album-cover.jpg",
    band:"Anthrax",
    album:"Spreading The Disease"
  },
  {
    img:"https://www.fuzz-bayonne.com/wp-content/uploads/2017/05/ANTHRAX-For-All-Kings.jpg",
    band:"Anthrax",
    album:"For All Kings"
  },
  {
    img:"https://media.senscritique.com/media/000004880796/source_big/Into_the_Pandemonium.jpg",
    band:"Celtic Frost",
    album:"Into The Pandemonium"
  },
  {
    img:"https://cdn.season-of-mist.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/M/i/Midnight-Sweet-Death-And-Ecstasy-CD-64340-1.jpg",
    band:"Midnight",
    album:"Sweet Death And Ecstasy"
  },
  {
    img:"http://www.lahordenoire-metal.com/media/pochettes/midnight-no-mercy-for-mayhem.jpg",
    band:"Midnight",
    album:"No Mercy For Mayhem"
  },
  {
    img:"https://4c79id2ej5i11apui01ll2wc-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/a1064168470_10.jpg",
    band:"Repulsion",
    album:"Horrified"
  },
  {
    img:"https://4c79id2ej5i11apui01ll2wc-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/6.-Autopsy-1200x1059.jpg",
    band:"Autopsy",
    album:"Severed Survival"
  },
  {
    img:"https://i.imgur.com/Uay0mLN.jpg",
    band:"Autopsy",
    album:"Macabre Eternal"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/8139Zm79d4L._SX522_.jpg",
    band:"Midnight Priest",
    album:"Aggressive Hauntings"
  },
  {
    img:"https://f4.bcbits.com/img/a2212161996_5.jpg",
    band:"Midnight Priest",
    album:"Midnight Steel"
  },
  {
    img:"http://www.hornsup.fr/uploads/files/INTERVIEWS/2018/Harakiri%20for%20the%20SKy/HarakiriForTheSky_2018_Arson_cover.jpg",
    band:"Harakiri For The Sky",
    album:"Arson"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/81cz%2BhcSuML._SL1425_.jpg",
    band:"Summoning",
    album:"Old Mornings Dawn"
  },
  {
    img:"https://www.coreandco.fr/upload/pics/albums2/big/devin-townsend-empath-7106.jpg",
    band:"Devin Townsend",
    album:"Empath"
  },
  {
    img:"https://img.discogs.com/2UjVcHuSRRP2vl5qtWUiHi7AYgA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-399180-1227581670.jpeg.jpg",
    band:"Morbid Angel",
    album:"Gateways To Annihilation"
  },
  {
    img:"http://www.nuclearblast.de/de/data/bands/memoriam/releases/memoriam-the-silent-vigil.jpg?x=666",
    band:"Memorial",
    album:"The Silent Vigil"
  },
  {
    img:"https://www.nuclearblast.de/de/data/bands/vader/releases/vader-tibi-et-igni.jpg?x=520",
    band:"Vader",
    album:"Tibi Et Igni"
  },
  {
    img:"https://img.discogs.com/6rtADJJefs2NKrsc3nWS87fXp2o=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3295336-1401879710-3489.jpeg.jpg",
    band:"Vader",
    album:"De Profundis"
  },
  {
    img:"https://img.discogs.com/-h6yNSdEI7jeIebCpDlUL8RNH9Y=/fit-in/600x612/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3225420-1321260087.jpeg.jpg",
    band:"Morgoth",
    album:"Odium"
  },
  {
    img:"https://www.spirit-of-metal.com/les%20goupes/A/Au-Dessus/End%20of%20Chapter/End%20of%20Chapter_3391.jpg",
    band:"Au-Dessus",
    album:"End Of Chapter"
  },
  {
    img:"https://img.cdandlp.com/2018/05/imgL/119169004.jpg",
    band:"Helloween",
    album:"Keeper Of The Seven Keys - Part II"
  },
  {
    img:"https://www.artandbiz.cafe/docs/articles/19/r-1073712-1510230828-5953jpeg_1572533328.jpeg",
    band:"Helloween",
    album:"Keeper Of The Seven Keys - Part I"
  },
  {
    img:"https://i.pinimg.com/originals/2a/d5/5f/2ad55f77af57c6e3467b1dc06111cd89.jpg",
    band:"Helloween",
    album:"Walls Of Jericho"
  },
  {
    img:"https://is2-ssl.mzstatic.com/image/thumb/Music6/v4/83/37/3e/83373e72-9565-721e-bc04-5b48036c6af6/source/1200x1200bb.jpg",
    band:"Helloween",
    album:"Straight Out Of Hell"
  },
  {
    img:"https://hardrock80fr.files.wordpress.com/2018/05/dm5yhfixcaajazt.jpg?w=300&h=300",
    band:"Helloween",
    album:"Metal Jukebox"
  },
  {
    img:"https://media.ultratop.be/cover/big/edguy-mandrake_a.jpg",
    band:"Edguy",
    album:"Mandrake"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/818RGMei08L._SL1500_.jpg",
    band:"Edguy",
    album:"Rocket Ride"
  },
  {
    img:"https://www.nuclearblast.de/static/articles/186/186872.jpg/1000x1000.jpg",
    band:"Edguy",
    album:"Age Of The Joker"
  },
  {
    img:"https://www.rockurlife.net/wp-content/uploads/2019/02/Edguy_Space_Police_Defenders_Of_The_Crown_Artwork.jpg",
    band:"Edguy",
    album:"Space Police"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/A1%2BDmKwuS8L._SL1500_.jpg",
    band:"Edguy",
    album:"Monuments"
  },
  {
    img:"https://img.discogs.com/rGk8JZTbq0cMG--FXbNcLhoGGGU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-467847-1529268889-6877.jpeg.jpg",
    band:"Stratovarius",
    album:"Visions"
  },
  {
    img:"https://m.media-amazon.com/images/I/816afaNB+oL._SS500_.jpg",
    band:"Stratovarius",
    album:"Elysium"
  },
  {
    img:"https://m.media-amazon.com/images/I/81C5qBsf2NL._SS500_.jpg",
    band:"Sonata Artica",
    album:"The Ninth Hour"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/91TrimNFNKL._SL1500_.jpg",
    band:"Sigh",
    album:"Heir To Despair"
  },
  {
    img:"https://www.spirit-of-metal.com/cover.php?id_album=156",
    band:"Mayhem",
    album:"De Mysteriis Dom Sathanas"
  },
  {
    img:"https://critiquedesalon.files.wordpress.com/2013/09/pitiful_reign-visual_violence-frontal.jpg",
    band:"Pitiful Reign",
    album:"Visual Violence"
  },
  {
    img:"https://f4.bcbits.com/img/a1268170864_10.jpg",
    band:"Exeloume",
    album:"Fairytale Of Perversion"
  },
  {
    img:"https://www.metal-archives.com/images/3/7/1/3/371316.jpg?0851",
    band:"Exeloume",
    album:"Return Of The Nephilim"
  },
  {
    img:"http://agoraphobic-news.com/public/data_uploads/ed_repka_s_best_50_album_covers_1547306930_1175275244/_1547308262_137330743.png",
    band:"Ultra-Violence",
    album:"Privilege To Overcome"
  },
  {
    img:"http://agoraphobic-news.com/public/data_uploads/ed_repka_s_best_50_album_covers_1547306930_1175275244/_1547308357_20509812.png",
    band:"Traitor",
    album:"Knee-Deep In The Dead"
  },
  {
    img:"http://agoraphobic-news.com/public/data_uploads/ed_repka_s_best_50_album_covers_1547306930_1175275244/_1547308495_42198518.png",
    band:"Abiotx",
    album:"Straight To Hell"
  },
  {
    img:"http://agoraphobic-news.com/public/data_uploads/ed_repka_s_best_50_album_covers_1547306930_1175275244/_1547308586_938957911.png",
    band:"Frade Negro",
    album:"Black Souls In The Abyss"
  },
  {
    img:"http://agoraphobic-news.com/public/data_uploads/ed_repka_s_best_50_album_covers_1547306930_1175275244/_1547308663_313317.png",
    band:"Panico Al Miedo",
    album:"Formador"
  },
  {
    img:"http://agoraphobic-news.com/public/data_uploads/ed_repka_s_best_50_album_covers_1547306930_1175275244/_1547308780_2024688621.png",
    band:"Untimely Demise",
    album:"Black Widow"
  },
  {
    img:"http://agoraphobic-news.com/public/data_uploads/ed_repka_s_best_50_album_covers_1547306930_1175275244/_1547308856_898909231.png",
    band:"Evil Survives",
    album:"Judas Priest Live"
  },
  {
    img:"http://agoraphobic-news.com/public/data_uploads/ed_repka_s_best_50_album_covers_1547306930_1175275244/_1547308941_195070364.png",
    band:"After All",
    album:"Rejection Overruled"
  },
  {
    img:"http://agoraphobic-news.com/public/data_uploads/ed_repka_s_best_50_album_covers_1547306930_1175275244/_1547309240_215528448.png",
    band:"Solstice",
    album:"Solstice"
  },
  {
    img:"http://agoraphobic-news.com/public/data_uploads/ed_repka_s_best_50_album_covers_1547306930_1175275244/_1547309493_947922822.png",
    band:"Eliminator",
    album:"Breaking The Wheel"
  }
]


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      random:null
    }
  }
  

  setRandomNumber = () => {
    let nbRandom = Math.floor(Math.random()* Math.floor(covers.length));
    this.setState({
      random:nbRandom
    })
  }

  componentWillMount(){
    this.setRandomNumber();
  }

  render() {
    return (
      <div className="App">
        {this.setRandomNumber}
        <Cover randomNumber={this.state.random} setRandomNumber={this.setRandomNumber}/>
      </div>

    )
  }
}

function Cover(props) {
  return (
    <div className="cover">
        <img src={covers[props.randomNumber].img} onClick={props.setRandomNumber}/>
        <span class="band">{covers[props.randomNumber].band}</span>
        <span class="album">{covers[props.randomNumber].album}</span>

        <span class="new">Want some more ?<br/> Click on the cover</span>
      </div>
  )
}


