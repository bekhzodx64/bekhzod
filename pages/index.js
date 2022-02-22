import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

const HomePage = () => {
	const { t } = useTranslation('common');

	return (
		<div>
			<Head>
				<title>{t('title')}</title>
			</Head>
			<h2 className='mb-5 text-justify fontbla'>
				Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные
				тексты. Путь агентство они однажды речью, своего не большого скатился текстами
				напоивший правилами. Пор заголовок океана деревни своего лучше текста, пунктуация
				сбить подзаголовок собрал осталось снова, однажды назад за гор напоивший сих.
				Силуэт путь дороге океана переписали парадигматическая даже он языком?
			</h2>
		</div>
	);
};

export default HomePage;
