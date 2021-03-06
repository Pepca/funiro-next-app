// Modules
import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'

// Media
import Slide1 from '../../public/images/slide1.jpg'
// import Slide2 from '../../public/images/vimle.jpg'
// import Slide3 from '../../public/images/groenlid.jpg'
// import Slide4 from '../../public/images/landskrona.jpg'

export default function handlers(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      id: uuidv4(),
      image: Slide1,
      name: 'Bohauss',
      description: 'Luxury big sofa 2-seat',
      price: 'Rp 17.000.000',
    },
    {
      id: uuidv4(),
      image: Slide1,
      name: 'VIMLE',
      description: '3-seat sofa, with headrest/Gunnared medium grey',
      price: 'Eur 524',
    },
    {
      id: uuidv4(),
      image: Slide1,
      name: 'GRÖNLID',
      description: 'Corner sofa, 5-seat w chaise longue',
      price: 'Eur 969',
    },
    {
      id: uuidv4(),
      image: Slide1,
      name: '2-seat sofa, Gunnared dark grey/wood',
      description: 'Luxury big sofa 2-seat',
      price: 'Eur 399',
    },
  ])
}
