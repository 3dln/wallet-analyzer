import { useTranslations } from "next-intl";

const PageTitle = () => {
    const t = useTranslations('Index');
    return (
        <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
                className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t('title')}
            </a>
        </div>
    );
}

export default PageTitle;
