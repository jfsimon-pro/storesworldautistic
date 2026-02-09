'use client';

import { useEffect, useState } from 'react';
import PageLayout from '../../components/PageLayout';
import ItemCard from '../../components/ItemCard';
import styles from '../../styles/ItemGrid.module.css';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedName, playItemAudio, Language } from '../../utils/i18nHelpers';

export default function AnimalsPage() {
    const { language } = useLanguage();
    const [animals, setAnimals] = useState<any[]>([]);

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                let allAnimals: any[] = [];

                // 1. Carrega estáticos
                try {
                    const staticRes = await fetch('/data/animals.json');
                    if (staticRes.ok) {
                        const staticData = await staticRes.json();
                        allAnimals = [...staticData];
                    }
                } catch (e) {
                    console.error('Erro ao carregar animals.json', e);
                }

                // 2. Carrega do banco
                try {
                    const dynamicRes = await fetch('/api/content/cards?category=ANIMALS');
                    if (dynamicRes.ok) {
                        const dynamicData = await dynamicRes.json();
                        if (Array.isArray(dynamicData) && dynamicData.length > 0) {
                            allAnimals = [...allAnimals, ...dynamicData];
                        }
                    }
                } catch (e) {
                    console.error('Erro ao buscar animais do banco:', e);
                }

                setAnimals(allAnimals);

            } catch (error) {
                console.error('Erro geral ao buscar animais:', error);
            }
        };

        fetchAnimals();
    }, []);

    const handlePress = (item: any) => {
        playItemAudio(item, language as Language, 'animals', 'capitalize');
    };

    return (
        <PageLayout backHref="/home">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {animals.map((item: any) => (
                        <ItemCard
                            key={item.id}
                            title={getLocalizedName(item, language as Language)}
                            imageSource={item.imageUrl || `/images/animals/${item.id}.png`}
                            backgroundColor={item.bgColor || item.color}
                            borderColor={item.borderColor || 'transparent'}
                            textColor={item.textColor}
                            onPress={() => handlePress(item)}
                        />
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
