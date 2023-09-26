import { useTranslations } from "next-intl";

const PageTitle = () => {
    const t = useTranslations('Index');
    return (
        <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            {t('title')}
        </div>
    );
}

export default PageTitle;
