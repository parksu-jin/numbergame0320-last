// green
import Green00 from './assets/green00.png'
import Green01 from './assets/green01.png'
import Green02 from './assets/green02.png'
import Green03 from './assets/green03.png'
import Green04 from './assets/green04.png'
import Green05 from './assets/green05.png'
import Green06 from './assets/green06.png'
import Green07 from './assets/green07.png'
import Green08 from './assets/green08.png'
import Green09 from './assets/green09.png'


// pink
import Pink00 from './assets/pink00.png'
import Pink01 from './assets/pink01.png'
import Pink02 from './assets/pink02.png'
import Pink03 from './assets/pink03.png'
import Pink04 from './assets/pink04.png'
import Pink05 from './assets/pink05.png'
import Pink06 from './assets/pink06.png'
import Pink07 from './assets/pink07.png'
import Pink08 from './assets/pink08.png'
import Pink09 from './assets/pink09.png'

import './Box.css'

// 이미지 넣기
const BoxImg = {
    green:[Green00,Green01,Green02,Green03,Green04,Green05,Green06,Green07,Green08,Green09],
    pink:[Pink00,Pink01,Pink02,Pink03,Pink04,Pink05,Pink06,Pink07,Pink08,Pink09]
}

function Box({color,str=1}){
    const src = BoxImg[color][str-1]
    const alt = `${color}${str}`

    return(
       <img src={src} alt={alt} />
    )
}

export default Box;
