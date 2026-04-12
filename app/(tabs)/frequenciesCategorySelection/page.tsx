'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import PageLayout from '../../components/PageLayout';
import styles from '../../styles/LevelSelection.module.css';
import { useTranslation } from '../../context/LanguageContext';

export default function FrequenciesCategorySelectionPage() {
    const { t } = useTranslation();
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [showInstructions, setShowInstructions] = useState(false);

    useEffect(() => {
        async function loadCategories() {
            try {
                const response = await fetch('/api/frequency-categories');
                const data = await response.json();
                setCategories(data.categories || []);
            } catch (error) {
                console.error('Erro ao carregar categorias:', error);
                setCategories([]);
            } finally {
                setLoading(false);
            }
        }
        loadCategories();
    }, []);

    const getTranslatedCategory = (category: string) => {
        // Tenta obter a tradução usando a chave
        const translation = t(`frequencyCategories.${category}`);

        // Se a tradução não existir (retornar a própria chave), formata o nome original
        if (translation === `frequencyCategories.${category}`) {
            return category
                .replace(/_/g, ' ')
                .replace(/([a-z])([A-Z])/g, '$1 $2')
                .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
        }

        return translation;
    };

    return (
        <PageLayout backHref="/home">
            <div className={styles.container}>
                <h1 className={styles.title}>{t('frequencies.selectCategory')}</h1>

                <div className={`${styles.infoCard} ${showInstructions ? styles.open : ''}`}>
                    <div
                        className={styles.infoHeader}
                        onClick={() => setShowInstructions(!showInstructions)}
                    >
                        <span className={styles.infoTitleText}>{t('frequencies.instructionsTitle')}</span>
                        <span className={styles.arrow}>▼</span>
                    </div>

                    <div className={styles.infoContentWrapper}>
                        <div className={styles.infoContentInner}>
                            <p>{t('frequencies.instructionsIntro')}</p>
                            <ul className={styles.infoList}>
                                <li>{t('frequencies.instruction1')}</li>
                                <li>{t('frequencies.instruction2')}</li>
                                <li>{t('frequencies.instruction3')}</li>
                            </ul>
                            <p>{t('frequencies.instructionsRoutine')}</p>
                            <p>{t('frequencies.instructionsSupport')}</p>
                            <p>{t('frequencies.instructionsWish')}</p>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <p>{t('frequencies.loadingCategories')}</p>
                ) : categories.length === 0 ? (
                    <p>{t('frequencies.noCategories')}</p>
                ) : (
                    <div className={styles.buttons}>
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/frequencies?category=${encodeURIComponent(category)}`}
                                className={styles.button}
                            >
                                {getTranslatedCategory(category)}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </PageLayout>
    );
}
