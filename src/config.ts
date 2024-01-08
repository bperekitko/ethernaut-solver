import * as dotenv from 'dotenv';
dotenv.config()

export const config = {
    ethernautAddress:`${process.env.ETHERNAUT_ADDRESS}`,
    statisticsAddress: `${process.env.STATISTICS_ADDRESS}`
}