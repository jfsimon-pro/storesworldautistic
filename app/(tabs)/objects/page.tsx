'use client';

import { useEffect, useState } from 'react';
import PageLayout from '../../components/PageLayout';
import ItemCard from '../../components/ItemCard';
import styles from '../../styles/ItemGrid.module.css';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedName, playItemAudio, Language } from '../../utils/i18nHelpers';

export default function ObjectsPage() {
    const { language } = useLanguage();
    const [objects, setObjects] = useState<any[]>([]);

    useEffect(() => {
        const fetchObjects = async () => {
            try {
                let allObjects: any[] = [];

                // 1. Carrega estáticos
                try {
                    const staticRes = await fetch('/data/objects.json');
                    if (staticRes.ok) {
                        const staticData = await staticRes.json();
                        allObjects = [...staticData];
                    }
                } catch (e) {
                    console.error('Erro ao carregar objects.json', e);
                }

                // 2. Carrega do banco
                try {
                    const dynamicRes = await fetch('/api/content/cards?category=OBJECTS');
                    if (dynamicRes.ok) {
                        const dynamicData = await dynamicRes.json();
                        if (Array.isArray(dynamicData) && dynamicData.length > 0) {
                            allObjects = [...allObjects, ...dynamicData];
                        }
                    }
                } catch (e) {
                    console.error('Erro ao buscar objetos do banco:', e);
                }

                setObjects(allObjects);

            } catch (error) {
                console.error('Erro geral ao buscar objetos:', error);
            }
        };

        fetchObjects();
    }, []);

    const handlePress = (item: any) => {
        playItemAudio(item, language as Language, 'objects', 'lowercase');
    };

    return (
        <PageLayout backHref="/home">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {objects.map((item: any) => (
                        <ItemCard
                            key={item.id}
                            title={getLocalizedName(item, language as Language)}
                            imageSource={item.imageUrl || `/images/objects/${item.id}.png`}
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
