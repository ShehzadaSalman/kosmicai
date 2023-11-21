import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const RangeSlider =  () => (
    <div className='flex items-center px-4 py-6 bg-[#09090D] rounded-xl gap-x-2'>
        <div className='text-[#D0CFD1]'>100</div>
        <Slider min={100} max={1000} defaultValue={300} 
        railStyle={{ backgroundColor: '#3A3940'}} 
            handleStyle={{ height: '15px', width: '15px', 
            backgroundColor: '#fff',
             borderColor: '#FF7DFF'}} />
        <div className='text-[#D0CFD1]'>1000</div>
    </div>
);

export default RangeSlider