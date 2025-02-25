import { ServiceCard } from '../components';
import { services } from '../constants';
import { motion } from 'motion/react';

const Services = () => {
	return (
		<section className="max-container flex justify-center flex-wrap gap-9">
			<motion.div
				className="flex justify-center flex-wrap gap-9"
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							staggerChildren: 0.2,
							staggerDirection: 1
						}
					}
				}}
				initial="hidden"
				animate="visible"
				transition={{ duration: 1000, delay: 1000 }}
			>
				{services.map(service => (
					<ServiceCard key={service.label} {...service} />
				))}
			</motion.div>
		</section>
	);
};

export default Services;
