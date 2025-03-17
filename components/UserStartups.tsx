import { client } from '@/sanity/lib/client';
import { STARTUPS_BY_AUTHOR_QUERY } from '@/sanity/lib/queries';
import React from 'react';
import StartupCard, { StartupCardType } from './StartupCard';

async function UserStartups({ id }: { id: string }) {
    const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

    return (
        <div>
            {startups.length > 0? (
                startups.map((startup: StartupCardType) => (
                    <StartupCard key={startup._id} post={startup} />
                ))
            ): (
                <p className='no-result'>No startups found for this author.</p> // Or some other message/component
            )}
        </div>
    );
}

export default UserStartups;