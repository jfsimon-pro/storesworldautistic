'use client';

import { useEffect, useState } from 'react';
import PageLayout from '../../components/PageLayout';
import ItemCard from '../../components/ItemCard';
import styles from '../../styles/ItemGrid.module.css';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedName, playItemAudio, Language } from '../../utils/i18nHelpers';

interface ColorItem {
    id: string;
    pt: string;
    en: string;
    es: string;
    color: string;
    borderColor: string;
    textColor?: string;
}

export default function ColorsPage() {
    const { language } = useLanguage();
    const [colors, setColors] = useState<ColorItem[]>([]);

    useEffect(() => {
        const fetchColors = async () => {
            try {
                // 1. Carrega dados estáticos primeiro
                let allColors: ColorItem[] = [];
                try {
                    const staticRes = await fetch('/data/colors.json');
                    if (staticRes.ok) {
                        const staticData = await staticRes.json();
                        allColors = [...staticData];
                    }
                } catch (e) {
                    console.error('Erro ao carregar colors.json:', e);
                }

                // 2. Busca dados do banco de dados
                try {
                    const dynamicRes = await fetch('/api/content/cards?category=COLORS');
                    if (dynamicRes.ok) {
                        const dynamicData = await dynamicRes.json();
                        if (Array.isArray(dynamicData) && dynamicData.length > 0) {
                            // Mescla os dados, evitando duplicatas se necessário (por ID ou slug)
                            // Aqui assumimos que IDs novos não conflitam com estáticos
                            allColors = [...allColors, ...dynamicData];
                        }
                    }
                } catch (e) {
                    console.error('Erro ao buscar cores do banco:', e);
                }

                setColors(allColors);

            } catch (error) {
                console.error('Erro geral ao buscar cores:', error);
            }
        };

        fetchColors();
    }, []);

    const handlePress = (item: any) => {
        playItemAudio(item, language as Language, 'colors', 'lowercase');
    };

    return (
        <PageLayout backHref="/home">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {colors.map((item: any) => (
                        <ItemCard
                            key={item.id}
                            title={getLocalizedName(item, language as Language)}
                            imageSource={item.imageUrl || `/images/colors/${item.id}.png`}
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
