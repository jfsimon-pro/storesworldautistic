'use client';

import { useEffect, useState } from 'react';
import PageLayout from '../../components/PageLayout';
import ItemCard from '../../components/ItemCard';
import styles from '../../styles/ItemGrid.module.css';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedName, playItemAudio, Language } from '../../utils/i18nHelpers';

export default function FoodPage() {
    const { language } = useLanguage();
    const [food, setFood] = useState<any[]>([]);

    useEffect(() => {
        const fetchFood = async () => {
            try {
                let allFood: any[] = [];

                // 1. Carrega estáticos
                try {
                    const staticRes = await fetch('/data/food.json');
                    if (staticRes.ok) {
                        const staticData = await staticRes.json();
                        allFood = [...staticData];
                    }
                } catch (e) {
                    console.error('Erro ao carregar food.json', e);
                }

                // 2. Carrega do banco
                try {
                    const dynamicRes = await fetch('/api/content/cards?category=FOOD');
                    if (dynamicRes.ok) {
                        const dynamicData = await dynamicRes.json();
                        if (Array.isArray(dynamicData) && dynamicData.length > 0) {
                            allFood = [...allFood, ...dynamicData];
                        }
                    }
                } catch (e) {
                    console.error('Erro ao buscar alimentos do banco:', e);
                }

                setFood(allFood);

            } catch (error) {
                console.error('Erro geral ao buscar alimentos:', error);
            }
        };

        fetchFood();
    }, []);

    const handlePress = (item: any) => {
        playItemAudio(item, language as Language, 'food', 'capitalize');
    };

    return (
        <PageLayout backHref="/home">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {food.map((item: any) => (
                        <ItemCard
                            key={item.id}
                            title={getLocalizedName(item, language as Language)}
                            imageSource={item.imageUrl || `/images/food/${item.id}.png`}
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
