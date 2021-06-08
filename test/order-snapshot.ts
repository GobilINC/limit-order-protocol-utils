import {LimitOrder, LimitOrderRFQ} from '../src';

export const ORDER_SNAPSHOT: LimitOrder = {
    getMakerAmount:
        '0xf4a215c300000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000064',
    getTakerAmount:
        '0x296637bf00000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000064',
    interaction: '0x333',
    makerAsset: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    makerAssetData:
        '0x23b872dd000000000000000000000000dddd91605c18a9999c1d47abfeed5daaaa70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003',
    permit: '0x222',
    predicate: '0x111',
    salt: '1',
    takerAsset: '0x111111111117dc0aa78b770fa6a738034120c302',
    takerAssetData:
        '0x23b872dd0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000dddd91605c18a9999c1d47abfeed5daaaa7000000000000000000000000000000000000000000000000000000000000000000064',
};

export const ORDER_RFQ_SNAPSHOT: LimitOrderRFQ = {
    info: '29942129672714733576710520833',
    makerAsset: '0x111111111117dc0aa78b770fa6a738034120c302',
    makerAssetData:
        '0x23b872dd000000000000000000000000dddd91605c18a9999c1d47abfeed5daaaa80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005',
    takerAsset: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    takerAssetData:
        '0x23b872dd0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000dddd91605c18a9999c1d47abfeed5daaaa8000000000000000000000000000000000000000000000000000000000000000000258',
};
