import { motion } from 'framer-motion';
import './BarraClima.css'
const BarraClima = ({ valor, max = 100, color }) => {
  const largura = `${(valor / max) * 100}%`;

  return (
    <div className='bar-div' style={{
      width: '100%',
      height: '20px',
      background: '#eee',
      borderRadius: '10px',
      overflow: 'hidden',
    }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: largura }}
        transition={{ duration: 1 }}
        style={{
          height: '100%',
          background: color,
        }}
      />
    </div>
  );
};
export default BarraClima