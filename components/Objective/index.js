import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { motion } from 'framer-motion'
import anims from '../../content/framermotion'
import getTexts from '../../content/translations'
import Image from 'next/image'

export default function Objective({lang}){
  const pointers = [[90,0],[100,18],[150,20],[145,40],[165,55],[185,42],[112,50],[90,55],[80,70],[70,88],[75,110],[90,105],[105,85],[135,85],[145,95],[155,125],[138,140],[108,145],[70,165],[115,185],[100,205],[85,300],[98,325]]
  return (
    <section id='objective'>
      <motion.img animate={{scale: [1, 1.2, 1]}} transition={{duration: 2, repeat: Infinity}} src="/svg/target.svg" alt="objetivo"/>
      <motion.p variants={anims.item} initial='hidden' whileInView='visible' transition={{duration: 1}}>
        {getTexts(lang, 'target')}
      </motion.p>
      <motion.div initial='hidden' whileInView='visible' variants={anims.container} className='por-que-elegirnos'>
        <motion.img variants={anims.item} className='container-img' src="/img/elegirnos.jpg" alt="Por que elegirnos"/>
        <div className="arg-map">
          <Image src='/img/mapa.png' alt='mapa' fill/>
          <Image className='argentina' src='/img/mapa-arg.svg' alt='mapa argentina' fill/>
          {pointers.map((coord, i) => (
            <Image key={i} src='/img/tag.svg' style={{position: 'absolute', left: coord[0], top: coord[1]}} alt='tag' width={20} height={20} className='tag'/>
          ))}
        </div>
        <motion.div variants={anims.item} className='text'>
          <motion.h2 variants={anims.item}>{getTexts(lang, 'whyus')}</motion.h2>
          <motion.ul variants={anims.container}>
            <motion.li variants={anims.item}><CheckCircleIcon/>{getTexts(lang, 'whyus1')}</motion.li>
            <motion.li variants={anims.item}><CheckCircleIcon/>{getTexts(lang, 'whyus2')}</motion.li>
            <motion.li variants={anims.item}><CheckCircleIcon/>{getTexts(lang, 'whyus3')}</motion.li>
            <motion.li variants={anims.item}><CheckCircleIcon/>{getTexts(lang, 'whyus4')}</motion.li>
            <motion.li variants={anims.item}><CheckCircleIcon/>{getTexts(lang, 'whyus5')}</motion.li>
          </motion.ul>
        </motion.div>
        <img className='bg-svg' src='/svg/whitelogo.svg' alt='logo'/>
      </motion.div>
    </section>
  )
}