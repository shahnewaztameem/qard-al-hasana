import { Button } from '@chakra-ui/react';

import Chart from './Chart';

const Analytics = () => {
    return (
        <section className="pt-12 pb-10">
            <h1 className="mb-6 text-3xl font-semibold text-gray-900">Welcome back, Chandpur Islamic Socity</h1>
            <div className="mb-8 flex justify-between">
                <div className="flex overflow-hidden rounded-md border text-base font-semibold">
                    <button className="flex h-10 items-center justify-center border-r bg-gray-100 px-3">
                        This Month
                    </button>
                    <button className="flex h-10 items-center justify-center border-r px-3">12 Months</button>
                    <button className="flex h-10 items-center justify-center border-r px-3">30 days</button>
                    <button className="flex h-10 items-center justify-center border-r px-3">7 days</button>
                    <button className="flex h-10 items-center justify-center  px-3">24 hours</button>
                </div>
                <div className="flex gap-3">
                    <Button
                        variant={'outline'}
                        className=""
                        size={'md'}
                        leftIcon={
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.5 8.33334H2.5M13.3333 1.66667V5.00001M6.66667 1.66667V5.00001M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0609C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33334C17.5 5.93321 17.5 5.23314 17.2275 4.69836C16.9878 4.22796 16.6054 3.84551 16.135 3.60582C15.6002 3.33334 14.9001 3.33334 13.5 3.33334H6.5C5.09987 3.33334 4.3998 3.33334 3.86502 3.60582C3.39462 3.84551 3.01217 4.22796 2.77248 4.69836C2.5 5.23314 2.5 5.93321 2.5 7.33334V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0609C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z"
                                    stroke="#344054"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                    >
                        <small className="text-sm font-semibold text-gray-500"> Select dates</small>
                    </Button>
                    <Button
                        variant={'outline'}
                        size="md"
                        leftIcon={
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                                    stroke="#344054"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                    >
                        Filters
                    </Button>
                </div>
            </div>
            <div className="flex gap-7">
                <div className="w-8/12">
                    <Chart />
                </div>
                <div className="h-9 w-4/12">
                    <div className="flex flex-col gap-5">
                        <div>
                            <h2 className="mb-2 text-sm font-medium text-gray-600">Total members</h2>
                            <div className="flex items-center gap-4">
                                <p className="text-3xl font-semibold text-gray-900">4,862</p>
                                <div className="flex h-6 flex-shrink-0 items-center justify-center gap-1 rounded-2xl bg-brand-50 px-3 text-sm font-medium text-brand-700">
                                    <ArrorLeftIcon />
                                    7.4
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-2 text-sm font-medium text-gray-600">Paid members</h2>
                            <div className="flex items-center gap-4">
                                <p className="text-3xl font-semibold text-gray-900">2,689</p>
                                <div className="flex h-6 flex-shrink-0 items-center justify-center gap-1 rounded-2xl bg-brand-50 px-3 text-sm font-medium text-brand-700">
                                    <ArrorLeftIcon />
                                    7.4
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-2 text-sm font-medium text-gray-600">Email open rate</h2>
                            <div className="flex items-center gap-4">
                                <p className="text-3xl font-semibold text-gray-900">82%</p>
                                <div className="flex h-6 flex-shrink-0 items-center justify-center gap-1 rounded-2xl bg-brand-50 px-3 text-sm font-medium text-brand-700">
                                    <ArrorLeftIcon />
                                    7.4
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ArrorLeftIcon = () => {
    return (
        <svg
            className="rotate-90 text-brand-600"
            height={12}
            width={12}
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="stroke-current"
                d="M16.3334 10.5H4.66669M4.66669 10.5L10.5 16.3333M4.66669 10.5L10.5 4.66663"
                stroke={'12B76A'}
                strokeWidth={'2.5'}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Analytics;
