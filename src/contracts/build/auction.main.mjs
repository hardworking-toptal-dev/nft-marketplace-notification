// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  return {
    created: [ctc0, ctc1, ctc2],
    down: [ctc0, ctc1, ctc1, ctc2, ctc3, ctc1],
    log: [ctc0, ctc1, ctc1],
    outcome: [ctc0, ctc0, ctc1, ctc2, ctc2, ctc4]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Object({
    deadline: ctc2,
    description: ctc3,
    owner: ctc0,
    price: ctc2,
    title: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Struct([['id', ctc2], ['blockEnded', ctc2], ['lastBid', ctc2]]);
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc5, ctc6, ctc9],
      6: [ctc0, ctc1, ctc4, ctc0, ctc2, ctc2, ctc9, ctc2],
      7: [ctc0, ctc1, ctc6, ctc10, ctc2, ctc0, ctc2, ctc6, ctc4, ctc2, ctc11, ctc0, ctc7, ctc7, ctc2, ctc9, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function _Auctioneer_acceptSale6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Auctioneer_acceptSale0_432: ctc7,
    Auctioneer_rejectSale0_432: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v674, v675, v722, v746, v749, v1121, v1130, v1131] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3]);
  const v1140 = ctc.selfAddress();
  const v1142 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:186:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:186:28:function exp)', 'at ./src/contracts/auction.rsh:180:58:application call to "runAuctioneer_acceptSale0_432" (defined at: ./src/contracts/auction.rsh:184:21:function exp)', 'at ./src/contracts/auction.rsh:180:58:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:180:58:function exp)'],
    msg: 'in',
    who: 'Auctioneer_acceptSale'
    });
  const v1144 = stdlib.addressEq(v1140, v674);
  stdlib.assert(v1144, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:187:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:186:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:186:28:function exp)', 'at ./src/contracts/auction.rsh:186:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:186:28:function exp)', 'at ./src/contracts/auction.rsh:180:58:application call to "runAuctioneer_acceptSale0_432" (defined at: ./src/contracts/auction.rsh:184:21:function exp)', 'at ./src/contracts/auction.rsh:180:58:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:180:58:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_acceptSale'
    });
  const v1148 = ['Auctioneer_acceptSale0_432', v1142];
  
  const txn1 = await (ctc.sendrecv({
    args: [v674, v675, v722, v746, v749, v1121, v1130, v1131, v1148],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:189:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1163], secs: v1165, time: v1164, didSend: v557, from: v1162 } = txn1;
      
      switch (v1163[0]) {
        case 'Auctioneer_acceptSale0_432': {
          const v1166 = v1163[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_acceptSale"
            });
          ;
          const v1173 = true;
          const v1174 = await txn1.getOutput('Auctioneer_acceptSale', 'v1173', ctc4, v1173);
          
          const v2933 = v1130;
          const v2934 = v1131;
          const v2935 = stdlib.le(v1164, v1121);
          const v2936 = v2935 ? false : false;
          if (v2936) {
            sim_r.isHalt = false;
            }
          else {
            const v2937 = v1130[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            const v2938 = v2937[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v746,
              tok: v675
              });
            sim_r.txns.push({
              kind: 'from',
              to: v674,
              tok: undefined /* Nothing */
              });
            const v2939 = 'accepted            ';
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v675
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Auctioneer_rejectSale0_432': {
          const v1188 = v1163[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1163], secs: v1165, time: v1164, didSend: v557, from: v1162 } = txn1;
  switch (v1163[0]) {
    case 'Auctioneer_acceptSale0_432': {
      const v1166 = v1163[1];
      undefined /* setApiDetails */;
      ;
      const v1173 = true;
      const v1174 = await txn1.getOutput('Auctioneer_acceptSale', 'v1173', ctc4, v1173);
      if (v557) {
        stdlib.protect(ctc9, await interact.out(v1166, v1174), {
          at: './src/contracts/auction.rsh:185:25:application',
          fs: ['at ./src/contracts/auction.rsh:185:25:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:185:25:function exp)', 'at ./src/contracts/auction.rsh:191:39:application call to "notify" (defined at: ./src/contracts/auction.rsh:190:34:function exp)', 'at ./src/contracts/auction.rsh:190:34:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:190:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_acceptSale'
          });
        }
      else {
        }
      
      const v2933 = v1130;
      const v2934 = v1131;
      const v2935 = stdlib.le(v1164, v1121);
      const v2936 = v2935 ? false : false;
      if (v2936) {
        return;
        }
      else {
        const v2937 = v1130[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
        const v2938 = v2937[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
        ;
        ;
        const v2939 = 'accepted            ';
        null;
        return;
        }
      break;
      }
    case 'Auctioneer_rejectSale0_432': {
      const v1188 = v1163[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctioneer_rejectSale6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Auctioneer_acceptSale0_432: ctc7,
    Auctioneer_rejectSale0_432: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v674, v675, v722, v746, v749, v1121, v1130, v1131] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3]);
  const v1150 = ctc.selfAddress();
  const v1152 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:197:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:197:28:function exp)', 'at ./src/contracts/auction.rsh:180:58:application call to "runAuctioneer_rejectSale0_432" (defined at: ./src/contracts/auction.rsh:195:21:function exp)', 'at ./src/contracts/auction.rsh:180:58:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:180:58:function exp)'],
    msg: 'in',
    who: 'Auctioneer_rejectSale'
    });
  const v1154 = stdlib.addressEq(v1150, v674);
  stdlib.assert(v1154, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:198:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:197:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:197:28:function exp)', 'at ./src/contracts/auction.rsh:197:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:197:28:function exp)', 'at ./src/contracts/auction.rsh:180:58:application call to "runAuctioneer_rejectSale0_432" (defined at: ./src/contracts/auction.rsh:195:21:function exp)', 'at ./src/contracts/auction.rsh:180:58:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:180:58:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_rejectSale'
    });
  const v1158 = ['Auctioneer_rejectSale0_432', v1152];
  
  const txn1 = await (ctc.sendrecv({
    args: [v674, v675, v722, v746, v749, v1121, v1130, v1131, v1158],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:200:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1163], secs: v1165, time: v1164, didSend: v557, from: v1162 } = txn1;
      
      switch (v1163[0]) {
        case 'Auctioneer_acceptSale0_432': {
          const v1166 = v1163[1];
          
          break;
          }
        case 'Auctioneer_rejectSale0_432': {
          const v1188 = v1163[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_rejectSale"
            });
          ;
          const v1203 = false;
          const v1204 = await txn1.getOutput('Auctioneer_rejectSale', 'v1203', ctc4, v1203);
          
          const v2972 = v1130;
          const v2973 = v1131;
          const v2974 = stdlib.le(v1164, v1121);
          const v2975 = v2974 ? false : false;
          if (v2975) {
            sim_r.isHalt = false;
            }
          else {
            const v2979 = v1130[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:33:application', stdlib.UInt_max, '0')];
            const v2980 = v2979[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:33:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v674,
              tok: v675
              });
            sim_r.txns.push({
              kind: 'from',
              to: v746,
              tok: undefined /* Nothing */
              });
            const v2981 = 'rejected            ';
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v675
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1163], secs: v1165, time: v1164, didSend: v557, from: v1162 } = txn1;
  switch (v1163[0]) {
    case 'Auctioneer_acceptSale0_432': {
      const v1166 = v1163[1];
      return;
      break;
      }
    case 'Auctioneer_rejectSale0_432': {
      const v1188 = v1163[1];
      undefined /* setApiDetails */;
      ;
      const v1203 = false;
      const v1204 = await txn1.getOutput('Auctioneer_rejectSale', 'v1203', ctc4, v1203);
      if (v557) {
        stdlib.protect(ctc9, await interact.out(v1188, v1204), {
          at: './src/contracts/auction.rsh:196:25:application',
          fs: ['at ./src/contracts/auction.rsh:196:25:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:196:25:function exp)', 'at ./src/contracts/auction.rsh:202:39:application call to "notify" (defined at: ./src/contracts/auction.rsh:201:34:function exp)', 'at ./src/contracts/auction.rsh:201:34:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:201:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_rejectSale'
          });
        }
      else {
        }
      
      const v2972 = v1130;
      const v2973 = v1131;
      const v2974 = stdlib.le(v1164, v1121);
      const v2975 = v2974 ? false : false;
      if (v2975) {
        return;
        }
      else {
        const v2979 = v1130[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:33:application', stdlib.UInt_max, '0')];
        const v2980 = v2979[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:33:application', stdlib.UInt_max, '0')];
        ;
        ;
        const v2981 = 'rejected            ';
        null;
        return;
        }
      break;
      }
    }
  
  
  };
export async function _Auctioneer_stopAuction7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_124: ctc3,
    Bidder_bid0_124: ctc10,
    Bidder_optIn0_124: ctc3
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Tuple([ctc4, ctc12]);
  
  
  const [v674, v675, v677, v696, v701, v714, v720, v721, v722, v742, v745, v746, v747, v748, v749, v756, v757] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v768 = ctc.selfAddress();
  const v770 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:149:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:149:36:function exp)', 'at ./src/contracts/auction.rsh:104:31:application call to "runAuctioneer_stopAuction0_124" (defined at: ./src/contracts/auction.rsh:147:29:function exp)', 'at ./src/contracts/auction.rsh:104:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:104:31:function exp)'],
    msg: 'in',
    who: 'Auctioneer_stopAuction'
    });
  const v772 = stdlib.addressEq(v768, v674);
  stdlib.assert(v772, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:150:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:149:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:149:36:function exp)', 'at ./src/contracts/auction.rsh:149:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:149:36:function exp)', 'at ./src/contracts/auction.rsh:104:31:application call to "runAuctioneer_stopAuction0_124" (defined at: ./src/contracts/auction.rsh:147:29:function exp)', 'at ./src/contracts/auction.rsh:104:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:104:31:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_stopAuction'
    });
  const v776 = ['Auctioneer_stopAuction0_124', v770];
  
  const txn1 = await (ctc.sendrecv({
    args: [v674, v675, v677, v696, v701, v714, v720, v721, v722, v742, v745, v746, v747, v748, v749, v756, v757, v776],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:39:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v807], secs: v809, time: v808, didSend: v318, from: v806 } = txn1;
      
      switch (v807[0]) {
        case 'Auctioneer_stopAuction0_124': {
          const v810 = v807[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_stopAuction"
            });
          ;
          const v824 = 'endSuccess          ';
          null;
          const v825 = {
            blockEnded: v808,
            id: v701,
            lastBid: v749
            };
          const v826 = await txn1.getOutput('Auctioneer_stopAuction', 'v825', ctc6, v825);
          
          const v2982 = v825;
          const v2983 = v746;
          const v2984 = v747;
          const v2985 = false;
          const v2986 = v749;
          const v2988 = v756;
          const v2989 = v757;
          const v2990 = stdlib.le(v808, v742);
          const v2991 = v2990 ? false : false;
          if (v2991) {
            sim_r.isHalt = false;
            }
          else {
            const v2992 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v677,
                remote: ({
                  accs: [],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v2993 = await txn1.getOutput('internal', 'v2992', ctc13, v2992);
            const v2994 = v2993[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
            const v2995 = stdlib.add(v757, v2994);
            const v2997 = 'down                ';
            null;
            const v2998 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3026 = v756;
            const v3027 = v2995;
            const v3028 = stdlib.le(v808, v2998);
            if (v3028) {
              sim_r.isHalt = false;
              }
            else {
              const v3030 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              const v3031 = v3030[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v746,
                tok: v675
                });
              sim_r.txns.push({
                kind: 'from',
                to: v674,
                tok: undefined /* Nothing */
                });
              const v3032 = 'accepted            ';
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v675
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Bidder_bid0_124': {
          const v907 = v807[1];
          
          break;
          }
        case 'Bidder_optIn0_124': {
          const v1004 = v807[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v807], secs: v809, time: v808, didSend: v318, from: v806 } = txn1;
  switch (v807[0]) {
    case 'Auctioneer_stopAuction0_124': {
      const v810 = v807[1];
      undefined /* setApiDetails */;
      ;
      const v824 = 'endSuccess          ';
      null;
      const v825 = {
        blockEnded: v808,
        id: v701,
        lastBid: v749
        };
      const v826 = await txn1.getOutput('Auctioneer_stopAuction', 'v825', ctc6, v825);
      if (v318) {
        stdlib.protect(ctc12, await interact.out(v810, v826), {
          at: './src/contracts/auction.rsh:148:33:application',
          fs: ['at ./src/contracts/auction.rsh:148:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:148:33:function exp)', 'at ./src/contracts/auction.rsh:160:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:153:42:function exp)', 'at ./src/contracts/auction.rsh:153:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:153:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_stopAuction'
          });
        }
      else {
        }
      
      const v2982 = v825;
      const v2983 = v746;
      const v2984 = v747;
      const v2985 = false;
      const v2986 = v749;
      const v2988 = v756;
      const v2989 = v757;
      const v2990 = stdlib.le(v808, v742);
      const v2991 = v2990 ? false : false;
      if (v2991) {
        return;
        }
      else {
        const v2992 = undefined /* Remote */;
        const v2993 = await txn1.getOutput('internal', 'v2992', ctc13, v2992);
        const v2994 = v2993[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
        const v2995 = stdlib.add(v757, v2994);
        const v2996 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2994);
        stdlib.assert(v2996, {
          at: './src/contracts/auction.rsh:165:37:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Auctioneer_stopAuction'
          });
        const v2997 = 'down                ';
        null;
        const v2998 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
        const v3026 = v756;
        const v3027 = v2995;
        const v3028 = stdlib.le(v808, v2998);
        if (v3028) {
          return;
          }
        else {
          const v3030 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
          const v3031 = v3030[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          const v3032 = 'accepted            ';
          null;
          return;
          }}
      break;
      }
    case 'Bidder_bid0_124': {
      const v907 = v807[1];
      return;
      break;
      }
    case 'Bidder_optIn0_124': {
      const v1004 = v807[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_bid7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_124: ctc3,
    Bidder_bid0_124: ctc10,
    Bidder_optIn0_124: ctc3
    });
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc13 = stdlib.T_Null;
  const ctc14 = stdlib.T_Tuple([ctc4, ctc13]);
  
  
  const [v674, v675, v677, v696, v701, v714, v720, v721, v722, v742, v745, v746, v747, v748, v749, v756, v757] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v780 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:121:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:121:49:function exp)', 'at ./src/contracts/auction.rsh:104:31:application call to "runBidder_bid0_124" (defined at: ./src/contracts/auction.rsh:121:30:function exp)', 'at ./src/contracts/auction.rsh:104:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:104:31:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v781 = v780[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v783 = stdlib.gt(v781, v749);
  stdlib.assert(v783, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:122:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:121:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:121:49:function exp)', 'at ./src/contracts/auction.rsh:104:31:application call to "runBidder_bid0_124" (defined at: ./src/contracts/auction.rsh:121:30:function exp)', 'at ./src/contracts/auction.rsh:104:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:104:31:function exp)'],
    msg: 'Your bid is too low, please try again',
    who: 'Bidder_bid'
    });
  const v790 = ['Bidder_bid0_124', v780];
  
  const txn1 = await (ctc.sendrecv({
    args: [v674, v675, v677, v696, v701, v714, v720, v721, v722, v742, v745, v746, v747, v748, v749, v756, v757, v790],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v781, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v807], secs: v809, time: v808, didSend: v318, from: v806 } = txn1;
      
      switch (v807[0]) {
        case 'Auctioneer_stopAuction0_124': {
          const v810 = v807[1];
          
          break;
          }
        case 'Bidder_bid0_124': {
          const v907 = v807[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v913 = v907[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:121:30:spread', stdlib.UInt_max, '0')];
          const v918 = stdlib.add(v757, v913);
          sim_r.txns.push({
            amt: v913,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v939 = [v746, v749];
          const v940 = await txn1.getOutput('Bidder_bid', 'v939', ctc12, v939);
          
          if (v747) {
            const v955 = 'bidSuccess          ';
            null;
            const v3414 = v745;
            const v3415 = v806;
            const v3416 = false;
            const v3417 = v748;
            const v3418 = v913;
            const v3420 = v756;
            const v3421 = v918;
            const v3422 = stdlib.le(v808, v742);
            const v3423 = v3422 ? v748 : false;
            if (v3423) {
              sim_r.isHalt = false;
              }
            else {
              const v3424 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v677,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
              const v3425 = await txn1.getOutput('internal', 'v3424', ctc14, v3424);
              const v3426 = v3425[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
              const v3427 = stdlib.add(v918, v3426);
              const v3429 = 'down                ';
              null;
              const v3430 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v3458 = v756;
              const v3459 = v3427;
              const v3460 = stdlib.le(v808, v3430);
              if (v3460) {
                sim_r.isHalt = false;
                }
              else {
                const v3462 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                const v3463 = v3462[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v806,
                  tok: v675
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v674,
                  tok: undefined /* Nothing */
                  });
                const v3464 = 'accepted            ';
                null;
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v675
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v952 = stdlib.sub(v918, v749);
            sim_r.txns.push({
              kind: 'from',
              to: v746,
              tok: undefined /* Nothing */
              });
            const v953 = 'bidSuccess          ';
            null;
            const v3468 = v745;
            const v3469 = v806;
            const v3470 = false;
            const v3471 = v748;
            const v3472 = v913;
            const v3474 = v756;
            const v3475 = v952;
            const v3476 = stdlib.le(v808, v742);
            const v3477 = v3476 ? v748 : false;
            if (v3477) {
              sim_r.isHalt = false;
              }
            else {
              const v3478 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v677,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
              const v3479 = await txn1.getOutput('internal', 'v3478', ctc14, v3478);
              const v3480 = v3479[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
              const v3481 = stdlib.add(v952, v3480);
              const v3483 = 'down                ';
              null;
              const v3484 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v3512 = v756;
              const v3513 = v3481;
              const v3514 = stdlib.le(v808, v3484);
              if (v3514) {
                sim_r.isHalt = false;
                }
              else {
                const v3516 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                const v3517 = v3516[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v806,
                  tok: v675
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v674,
                  tok: undefined /* Nothing */
                  });
                const v3518 = 'accepted            ';
                null;
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v675
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        case 'Bidder_optIn0_124': {
          const v1004 = v807[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v807], secs: v809, time: v808, didSend: v318, from: v806 } = txn1;
  switch (v807[0]) {
    case 'Auctioneer_stopAuction0_124': {
      const v810 = v807[1];
      return;
      break;
      }
    case 'Bidder_bid0_124': {
      const v907 = v807[1];
      undefined /* setApiDetails */;
      const v913 = v907[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:121:30:spread', stdlib.UInt_max, '0')];
      const v914 = stdlib.gt(v913, v749);
      stdlib.assert(v914, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/auction.rsh:122:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:121:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:121:49:function exp)', 'at ./src/contracts/auction.rsh:104:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:121:49:function exp)', 'at ./src/contracts/auction.rsh:104:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:104:31:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      const v918 = stdlib.add(v757, v913);
      ;
      const v939 = [v746, v749];
      const v940 = await txn1.getOutput('Bidder_bid', 'v939', ctc12, v939);
      if (v318) {
        stdlib.protect(ctc13, await interact.out(v907, v940), {
          at: './src/contracts/auction.rsh:121:31:application',
          fs: ['at ./src/contracts/auction.rsh:121:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:121:31:function exp)', 'at ./src/contracts/auction.rsh:126:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:125:50:function exp)', 'at ./src/contracts/auction.rsh:125:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:125:50:function exp)'],
          msg: 'out',
          who: 'Bidder_bid'
          });
        }
      else {
        }
      
      if (v747) {
        const v955 = 'bidSuccess          ';
        null;
        const v3414 = v745;
        const v3415 = v806;
        const v3416 = false;
        const v3417 = v748;
        const v3418 = v913;
        const v3420 = v756;
        const v3421 = v918;
        const v3422 = stdlib.le(v808, v742);
        const v3423 = v3422 ? v748 : false;
        if (v3423) {
          return;
          }
        else {
          const v3424 = undefined /* Remote */;
          const v3425 = await txn1.getOutput('internal', 'v3424', ctc14, v3424);
          const v3426 = v3425[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
          const v3427 = stdlib.add(v918, v3426);
          const v3428 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3426);
          stdlib.assert(v3428, {
            at: './src/contracts/auction.rsh:165:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          const v3429 = 'down                ';
          null;
          const v3430 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v3458 = v756;
          const v3459 = v3427;
          const v3460 = stdlib.le(v808, v3430);
          if (v3460) {
            return;
            }
          else {
            const v3462 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            const v3463 = v3462[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            const v3464 = 'accepted            ';
            null;
            return;
            }}}
      else {
        const v952 = stdlib.sub(v918, v749);
        ;
        const v953 = 'bidSuccess          ';
        null;
        const v3468 = v745;
        const v3469 = v806;
        const v3470 = false;
        const v3471 = v748;
        const v3472 = v913;
        const v3474 = v756;
        const v3475 = v952;
        const v3476 = stdlib.le(v808, v742);
        const v3477 = v3476 ? v748 : false;
        if (v3477) {
          return;
          }
        else {
          const v3478 = undefined /* Remote */;
          const v3479 = await txn1.getOutput('internal', 'v3478', ctc14, v3478);
          const v3480 = v3479[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
          const v3481 = stdlib.add(v952, v3480);
          const v3482 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3480);
          stdlib.assert(v3482, {
            at: './src/contracts/auction.rsh:165:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          const v3483 = 'down                ';
          null;
          const v3484 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v3512 = v756;
          const v3513 = v3481;
          const v3514 = stdlib.le(v808, v3484);
          if (v3514) {
            return;
            }
          else {
            const v3516 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            const v3517 = v3516[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            const v3518 = 'accepted            ';
            null;
            return;
            }}}
      break;
      }
    case 'Bidder_optIn0_124': {
      const v1004 = v807[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_optIn7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_optIn7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_optIn7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_124: ctc3,
    Bidder_bid0_124: ctc10,
    Bidder_optIn0_124: ctc3
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Tuple([ctc4, ctc12]);
  
  
  const [v674, v675, v677, v696, v701, v714, v720, v721, v722, v742, v745, v746, v747, v748, v749, v756, v757] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v794 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:134:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:134:48:function exp)', 'at ./src/contracts/auction.rsh:104:31:application call to "runBidder_optIn0_124" (defined at: ./src/contracts/auction.rsh:134:30:function exp)', 'at ./src/contracts/auction.rsh:104:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:104:31:function exp)'],
    msg: 'in',
    who: 'Bidder_optIn'
    });
  const v798 = ['Bidder_optIn0_124', v794];
  
  const txn1 = await (ctc.sendrecv({
    args: [v674, v675, v677, v696, v701, v714, v720, v721, v722, v742, v745, v746, v747, v748, v749, v756, v757, v798],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v807], secs: v809, time: v808, didSend: v318, from: v806 } = txn1;
      
      switch (v807[0]) {
        case 'Auctioneer_stopAuction0_124': {
          const v810 = v807[1];
          
          break;
          }
        case 'Bidder_bid0_124': {
          const v907 = v807[1];
          
          break;
          }
        case 'Bidder_optIn0_124': {
          const v1004 = v807[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_optIn"
            });
          const v1015 = stdlib.add(v757, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1056 = stdlib.ge(v1015, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:83:application', stdlib.UInt_max, '900000'));
          if (v1056) {
            const v1060 = stdlib.sub(v1015, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:83:application', stdlib.UInt_max, '900000'));
            sim_r.txns.push({
              kind: 'from',
              to: v714,
              tok: undefined /* Nothing */
              });
            const v1062 = stdlib.ge(v1060, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
            if (v1062) {
              const v1066 = stdlib.sub(v1060, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v674,
                tok: undefined /* Nothing */
                });
              const v1067 = true;
              const v1068 = await txn1.getOutput('Bidder_optIn', 'v1067', ctc7, v1067);
              
              const v3900 = v745;
              const v3901 = v746;
              const v3902 = v747;
              const v3903 = v748;
              const v3904 = v749;
              const v3906 = v756;
              const v3907 = v1066;
              const v3908 = stdlib.le(v808, v742);
              const v3909 = v3908 ? v748 : false;
              if (v3909) {
                sim_r.isHalt = false;
                }
              else {
                const v3910 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v677,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v3911 = await txn1.getOutput('internal', 'v3910', ctc13, v3910);
                const v3912 = v3911[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
                const v3913 = stdlib.add(v1066, v3912);
                const v3915 = 'down                ';
                null;
                const v3916 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3944 = v756;
                const v3945 = v3913;
                const v3946 = stdlib.le(v808, v3916);
                if (v3946) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3948 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  const v3949 = v3948[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v746,
                    tok: v675
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v674,
                    tok: undefined /* Nothing */
                    });
                  const v3950 = 'accepted            ';
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v675
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              const v1074 = true;
              const v1075 = await txn1.getOutput('Bidder_optIn', 'v1074', ctc7, v1074);
              
              const v3954 = v745;
              const v3955 = v746;
              const v3956 = v747;
              const v3957 = v748;
              const v3958 = v749;
              const v3960 = v756;
              const v3961 = v1060;
              const v3962 = stdlib.le(v808, v742);
              const v3963 = v3962 ? v748 : false;
              if (v3963) {
                sim_r.isHalt = false;
                }
              else {
                const v3964 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v677,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v3965 = await txn1.getOutput('internal', 'v3964', ctc13, v3964);
                const v3966 = v3965[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
                const v3967 = stdlib.add(v1060, v3966);
                const v3969 = 'down                ';
                null;
                const v3970 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3998 = v756;
                const v3999 = v3967;
                const v4000 = stdlib.le(v808, v3970);
                if (v4000) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v4002 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  const v4003 = v4002[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v746,
                    tok: v675
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v674,
                    tok: undefined /* Nothing */
                    });
                  const v4004 = 'accepted            ';
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v675
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          else {
            const v1082 = stdlib.ge(v1015, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
            if (v1082) {
              const v1086 = stdlib.sub(v1015, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v674,
                tok: undefined /* Nothing */
                });
              const v1087 = true;
              const v1088 = await txn1.getOutput('Bidder_optIn', 'v1087', ctc7, v1087);
              
              const v4008 = v745;
              const v4009 = v746;
              const v4010 = v747;
              const v4011 = v748;
              const v4012 = v749;
              const v4014 = v756;
              const v4015 = v1086;
              const v4016 = stdlib.le(v808, v742);
              const v4017 = v4016 ? v748 : false;
              if (v4017) {
                sim_r.isHalt = false;
                }
              else {
                const v4018 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v677,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4019 = await txn1.getOutput('internal', 'v4018', ctc13, v4018);
                const v4020 = v4019[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
                const v4021 = stdlib.add(v1086, v4020);
                const v4023 = 'down                ';
                null;
                const v4024 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v4052 = v756;
                const v4053 = v4021;
                const v4054 = stdlib.le(v808, v4024);
                if (v4054) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v4056 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  const v4057 = v4056[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v746,
                    tok: v675
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v674,
                    tok: undefined /* Nothing */
                    });
                  const v4058 = 'accepted            ';
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v675
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              const v1094 = true;
              const v1095 = await txn1.getOutput('Bidder_optIn', 'v1094', ctc7, v1094);
              
              const v4062 = v745;
              const v4063 = v746;
              const v4064 = v747;
              const v4065 = v748;
              const v4066 = v749;
              const v4068 = v756;
              const v4069 = v1015;
              const v4070 = stdlib.le(v808, v742);
              const v4071 = v4070 ? v748 : false;
              if (v4071) {
                sim_r.isHalt = false;
                }
              else {
                const v4072 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v677,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4073 = await txn1.getOutput('internal', 'v4072', ctc13, v4072);
                const v4074 = v4073[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
                const v4075 = stdlib.add(v1015, v4074);
                const v4077 = 'down                ';
                null;
                const v4078 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v4106 = v756;
                const v4107 = v4075;
                const v4108 = stdlib.le(v808, v4078);
                if (v4108) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v4110 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  const v4111 = v4110[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v746,
                    tok: v675
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v674,
                    tok: undefined /* Nothing */
                    });
                  const v4112 = 'accepted            ';
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v675
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v807], secs: v809, time: v808, didSend: v318, from: v806 } = txn1;
  switch (v807[0]) {
    case 'Auctioneer_stopAuction0_124': {
      const v810 = v807[1];
      return;
      break;
      }
    case 'Bidder_bid0_124': {
      const v907 = v807[1];
      return;
      break;
      }
    case 'Bidder_optIn0_124': {
      const v1004 = v807[1];
      undefined /* setApiDetails */;
      const v1015 = stdlib.add(v757, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
      ;
      const v1056 = stdlib.ge(v1015, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:83:application', stdlib.UInt_max, '900000'));
      if (v1056) {
        const v1060 = stdlib.sub(v1015, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:83:application', stdlib.UInt_max, '900000'));
        ;
        const v1062 = stdlib.ge(v1060, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
        if (v1062) {
          const v1066 = stdlib.sub(v1060, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
          ;
          const v1067 = true;
          const v1068 = await txn1.getOutput('Bidder_optIn', 'v1067', ctc7, v1067);
          if (v318) {
            stdlib.protect(ctc12, await interact.out(v1004, v1068), {
              at: './src/contracts/auction.rsh:134:31:application',
              fs: ['at ./src/contracts/auction.rsh:134:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:134:31:function exp)', 'at ./src/contracts/auction.rsh:142:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:137:50:function exp)', 'at ./src/contracts/auction.rsh:137:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v3900 = v745;
          const v3901 = v746;
          const v3902 = v747;
          const v3903 = v748;
          const v3904 = v749;
          const v3906 = v756;
          const v3907 = v1066;
          const v3908 = stdlib.le(v808, v742);
          const v3909 = v3908 ? v748 : false;
          if (v3909) {
            return;
            }
          else {
            const v3910 = undefined /* Remote */;
            const v3911 = await txn1.getOutput('internal', 'v3910', ctc13, v3910);
            const v3912 = v3911[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
            const v3913 = stdlib.add(v1066, v3912);
            const v3914 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3912);
            stdlib.assert(v3914, {
              at: './src/contracts/auction.rsh:165:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            const v3915 = 'down                ';
            null;
            const v3916 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3944 = v756;
            const v3945 = v3913;
            const v3946 = stdlib.le(v808, v3916);
            if (v3946) {
              return;
              }
            else {
              const v3948 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              const v3949 = v3948[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              const v3950 = 'accepted            ';
              null;
              return;
              }}}
        else {
          const v1074 = true;
          const v1075 = await txn1.getOutput('Bidder_optIn', 'v1074', ctc7, v1074);
          if (v318) {
            stdlib.protect(ctc12, await interact.out(v1004, v1075), {
              at: './src/contracts/auction.rsh:134:31:application',
              fs: ['at ./src/contracts/auction.rsh:134:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:134:31:function exp)', 'at ./src/contracts/auction.rsh:142:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:137:50:function exp)', 'at ./src/contracts/auction.rsh:137:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v3954 = v745;
          const v3955 = v746;
          const v3956 = v747;
          const v3957 = v748;
          const v3958 = v749;
          const v3960 = v756;
          const v3961 = v1060;
          const v3962 = stdlib.le(v808, v742);
          const v3963 = v3962 ? v748 : false;
          if (v3963) {
            return;
            }
          else {
            const v3964 = undefined /* Remote */;
            const v3965 = await txn1.getOutput('internal', 'v3964', ctc13, v3964);
            const v3966 = v3965[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
            const v3967 = stdlib.add(v1060, v3966);
            const v3968 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3966);
            stdlib.assert(v3968, {
              at: './src/contracts/auction.rsh:165:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            const v3969 = 'down                ';
            null;
            const v3970 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3998 = v756;
            const v3999 = v3967;
            const v4000 = stdlib.le(v808, v3970);
            if (v4000) {
              return;
              }
            else {
              const v4002 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              const v4003 = v4002[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              const v4004 = 'accepted            ';
              null;
              return;
              }}}}
      else {
        const v1082 = stdlib.ge(v1015, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
        if (v1082) {
          const v1086 = stdlib.sub(v1015, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
          ;
          const v1087 = true;
          const v1088 = await txn1.getOutput('Bidder_optIn', 'v1087', ctc7, v1087);
          if (v318) {
            stdlib.protect(ctc12, await interact.out(v1004, v1088), {
              at: './src/contracts/auction.rsh:134:31:application',
              fs: ['at ./src/contracts/auction.rsh:134:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:134:31:function exp)', 'at ./src/contracts/auction.rsh:142:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:137:50:function exp)', 'at ./src/contracts/auction.rsh:137:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4008 = v745;
          const v4009 = v746;
          const v4010 = v747;
          const v4011 = v748;
          const v4012 = v749;
          const v4014 = v756;
          const v4015 = v1086;
          const v4016 = stdlib.le(v808, v742);
          const v4017 = v4016 ? v748 : false;
          if (v4017) {
            return;
            }
          else {
            const v4018 = undefined /* Remote */;
            const v4019 = await txn1.getOutput('internal', 'v4018', ctc13, v4018);
            const v4020 = v4019[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
            const v4021 = stdlib.add(v1086, v4020);
            const v4022 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4020);
            stdlib.assert(v4022, {
              at: './src/contracts/auction.rsh:165:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            const v4023 = 'down                ';
            null;
            const v4024 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v4052 = v756;
            const v4053 = v4021;
            const v4054 = stdlib.le(v808, v4024);
            if (v4054) {
              return;
              }
            else {
              const v4056 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              const v4057 = v4056[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              const v4058 = 'accepted            ';
              null;
              return;
              }}}
        else {
          const v1094 = true;
          const v1095 = await txn1.getOutput('Bidder_optIn', 'v1094', ctc7, v1094);
          if (v318) {
            stdlib.protect(ctc12, await interact.out(v1004, v1095), {
              at: './src/contracts/auction.rsh:134:31:application',
              fs: ['at ./src/contracts/auction.rsh:134:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:134:31:function exp)', 'at ./src/contracts/auction.rsh:142:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:137:50:function exp)', 'at ./src/contracts/auction.rsh:137:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4062 = v745;
          const v4063 = v746;
          const v4064 = v747;
          const v4065 = v748;
          const v4066 = v749;
          const v4068 = v756;
          const v4069 = v1015;
          const v4070 = stdlib.le(v808, v742);
          const v4071 = v4070 ? v748 : false;
          if (v4071) {
            return;
            }
          else {
            const v4072 = undefined /* Remote */;
            const v4073 = await txn1.getOutput('internal', 'v4072', ctc13, v4072);
            const v4074 = v4073[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
            const v4075 = stdlib.add(v1015, v4074);
            const v4076 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4074);
            stdlib.assert(v4076, {
              at: './src/contracts/auction.rsh:165:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            const v4077 = 'down                ';
            null;
            const v4078 = stdlib.safeAdd(v808, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v4106 = v756;
            const v4107 = v4075;
            const v4108 = stdlib.le(v808, v4078);
            if (v4108) {
              return;
              }
            else {
              const v4110 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              const v4111 = v4110[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              const v4112 = 'accepted            ';
              null;
              return;
              }}}}
      break;
      }
    }
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Object({
    adminContract: ctc0,
    deadline: ctc1,
    description: ctc2,
    owner: ctc3,
    price: ctc1,
    title: ctc4,
    tokenId: ctc5
    });
  const ctc7 = stdlib.T_Object({
    deadline: ctc1,
    description: ctc2,
    owner: ctc3,
    price: ctc1,
    title: ctc4
    });
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Auctioneer_stopAuction0_124: ctc12,
    Bidder_bid0_124: ctc13,
    Bidder_optIn0_124: ctc12
    });
  const ctc15 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc17 = stdlib.T_Bool;
  const ctc18 = stdlib.T_Data({
    Auctioneer_acceptSale0_432: ctc12,
    Auctioneer_rejectSale0_432: ctc12
    });
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1, ctc17]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v651 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v652 = [v651];
  const v656 = stdlib.protect(ctc6, interact.getAuction, 'for Seller\'s interact field getAuction');
  const v657 = v656.adminContract;
  const v658 = v656.deadline;
  const v659 = v656.description;
  const v660 = v656.owner;
  const v661 = v656.price;
  const v662 = v656.title;
  const v663 = v656.tokenId;
  
  const v673 = {
    deadline: v658,
    description: v659,
    owner: v660,
    price: v661,
    title: v662
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v663, v673, v657],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:68:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc7, ctc0],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:68:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v675, v676, v677], secs: v679, time: v678, didSend: v44, from: v674 } = txn1;
      
      const v680 = v652[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:68:16:dot', stdlib.UInt_max, '0')];
      const v681 = stdlib.Array_set(v680, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:68:16:dot', stdlib.UInt_max, '0'));
      const v682 = stdlib.Array_set(v652, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:68:16:dot', stdlib.UInt_max, '0'), v681);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v675
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v675, v676, v677], secs: v679, time: v678, didSend: v44, from: v674 } = txn1;
  const v680 = v652[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:68:16:dot', stdlib.UInt_max, '0')];
  const v681 = stdlib.Array_set(v680, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:68:16:dot', stdlib.UInt_max, '0'));
  const v682 = stdlib.Array_set(v652, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:68:16:dot', stdlib.UInt_max, '0'), v681);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v674, v675, v676, v677, v682],
    evt_cnt: 0,
    funcNum: 1,
    lct: v678,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:70:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'), v675]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v686, time: v685, didSend: v51, from: v684 } = txn2;
      
      ;
      const v687 = v682[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:70:16:dot', stdlib.UInt_max, '0')];
      const v688 = v687[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:70:16:dot', stdlib.UInt_max, '0')];
      const v689 = stdlib.add(v688, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
      const v691 = stdlib.Array_set(v687, '0', v689);
      const v692 = stdlib.Array_set(v682, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:70:16:dot', stdlib.UInt_max, '0'), v691);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v675
        });
      const v696 = [];
      const v697 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v677,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:81:48:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:81:48:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc1.defaultValue /* simReturnVal */];})();
      const v698 = await txn2.getOutput('internal', 'v697', ctc8, v697);
      const v700 = v698[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:81:48:application', stdlib.UInt_max, '0')];
      const v701 = v698[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:81:48:application', stdlib.UInt_max, '1')];
      const v710 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v677,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:82:68:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:82:68:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc3.defaultValue /* simReturnVal */];})();
      const v711 = await txn2.getOutput('internal', 'v710', ctc9, v710);
      const v713 = v711[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:82:68:application', stdlib.UInt_max, '0')];
      const v714 = v711[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:82:68:application', stdlib.UInt_max, '1')];
      const v718 = stdlib.add(v700, v713);
      const v720 = v685;
      const v721 = await ctc.getContractInfo();
      const v722 = v676.title;
      const v723 = v676.description;
      const v724 = v676.price;
      const v728 = {
        blockCreated: v685,
        contractInfo: v721,
        description: v723,
        id: v701,
        owner: v674,
        price: v724,
        title: v722,
        tokenId: v675
        };
      const v729 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v677,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:97:39:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:97:39:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
      const v730 = await txn2.getOutput('internal', 'v729', ctc11, v729);
      const v732 = v730[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:97:39:application', stdlib.UInt_max, '0')];
      const v737 = stdlib.add(v718, v732);
      const v741 = v676.deadline;
      const v742 = stdlib.safeAdd(v685, v741);
      const v743 = 'created             ';
      null;
      const v744 = {
        blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v745 = v744;
      const v746 = v674;
      const v747 = true;
      const v748 = true;
      const v749 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:107:25:decimal', stdlib.UInt_max, '0');
      const v750 = v685;
      const v756 = v692;
      const v757 = v737;
      
      if (await (async () => {
        const v766 = stdlib.le(v750, v742);
        const v767 = v766 ? v748 : false;
        
        return v767;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1107 = await (async () => {
          sim_r.txns.push({
            kind: 'remote',
            obj: v677,
            remote: ({
              accs: [],
              apps: [],
              bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
              fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0'),
              toks: []
              })
            })
          return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
        const v1108 = await txn3.getOutput('internal', 'v1107', ctc11, v1107);
        const v1110 = v1108[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
        const v1115 = stdlib.add(v757, v1110);
        const v1119 = 'down                ';
        null;
        const v1121 = stdlib.safeAdd(v750, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
        const v1122 = true;
        const v1123 = true;
        const v1124 = v750;
        const v1130 = v756;
        const v1131 = v1115;
        
        if (await (async () => {
          const v1138 = stdlib.le(v1124, v1121);
          const v1139 = v1138 ? v1123 : false;
          
          return v1139;})()) {
          sim_r.isHalt = false;
          }
        else {
          if (v1122) {
            const v1210 = v1130[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            const v1211 = v1210[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v746,
              tok: v675
              });
            sim_r.txns.push({
              kind: 'from',
              to: v674,
              tok: undefined /* Nothing */
              });
            const v1227 = 'accepted            ';
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v675
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v1233 = v1130[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:33:application', stdlib.UInt_max, '0')];
            const v1234 = v1233[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:33:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v674,
              tok: v675
              });
            sim_r.txns.push({
              kind: 'from',
              to: v746,
              tok: undefined /* Nothing */
              });
            const v1250 = 'rejected            ';
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v675
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc5, ctc7, ctc0, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v686, time: v685, didSend: v51, from: v684 } = txn2;
  ;
  const v687 = v682[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:70:16:dot', stdlib.UInt_max, '0')];
  const v688 = v687[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:70:16:dot', stdlib.UInt_max, '0')];
  const v689 = stdlib.add(v688, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v691 = stdlib.Array_set(v687, '0', v689);
  const v692 = stdlib.Array_set(v682, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:70:16:dot', stdlib.UInt_max, '0'), v691);
  ;
  const v693 = stdlib.addressEq(v674, v684);
  stdlib.assert(v693, {
    at: './src/contracts/auction.rsh:70:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v696 = [];
  const v697 = undefined /* Remote */;
  const v698 = await txn2.getOutput('internal', 'v697', ctc8, v697);
  const v700 = v698[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:81:48:application', stdlib.UInt_max, '0')];
  const v701 = v698[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:81:48:application', stdlib.UInt_max, '1')];
  const v706 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v700);
  stdlib.assert(v706, {
    at: './src/contracts/auction.rsh:81:48:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v710 = undefined /* Remote */;
  const v711 = await txn2.getOutput('internal', 'v710', ctc9, v710);
  const v713 = v711[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:82:68:application', stdlib.UInt_max, '0')];
  const v714 = v711[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:82:68:application', stdlib.UInt_max, '1')];
  const v718 = stdlib.add(v700, v713);
  const v719 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v713);
  stdlib.assert(v719, {
    at: './src/contracts/auction.rsh:82:68:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v720 = v685;
  const v721 = await ctc.getContractInfo();
  const v722 = v676.title;
  const v723 = v676.description;
  const v724 = v676.price;
  const v728 = {
    blockCreated: v685,
    contractInfo: v721,
    description: v723,
    id: v701,
    owner: v674,
    price: v724,
    title: v722,
    tokenId: v675
    };
  const v729 = undefined /* Remote */;
  const v730 = await txn2.getOutput('internal', 'v729', ctc11, v729);
  const v732 = v730[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:97:39:application', stdlib.UInt_max, '0')];
  const v737 = stdlib.add(v718, v732);
  const v738 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v732);
  stdlib.assert(v738, {
    at: './src/contracts/auction.rsh:97:39:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v741 = v676.deadline;
  const v742 = stdlib.safeAdd(v685, v741);
  const v743 = 'created             ';
  null;
  const v744 = {
    blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v745 = v744;
  let v746 = v674;
  let v747 = true;
  let v748 = true;
  let v749 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:107:25:decimal', stdlib.UInt_max, '0');
  let v750 = v685;
  let v756 = v692;
  let v757 = v737;
  
  let txn3 = txn2;
  while (await (async () => {
    const v766 = stdlib.le(v750, v742);
    const v767 = v766 ? v748 : false;
    
    return v767;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v807], secs: v809, time: v808, didSend: v318, from: v806 } = txn4;
    switch (v807[0]) {
      case 'Auctioneer_stopAuction0_124': {
        const v810 = v807[1];
        undefined /* setApiDetails */;
        ;
        const v824 = 'endSuccess          ';
        null;
        const v825 = {
          blockEnded: v808,
          id: v701,
          lastBid: v749
          };
        await txn4.getOutput('Auctioneer_stopAuction', 'v825', ctc15, v825);
        const cv745 = v825;
        const cv746 = v746;
        const cv747 = v747;
        const cv748 = false;
        const cv749 = v749;
        const cv750 = v808;
        const cv756 = v756;
        const cv757 = v757;
        
        v745 = cv745;
        v746 = cv746;
        v747 = cv747;
        v748 = cv748;
        v749 = cv749;
        v750 = cv750;
        v756 = cv756;
        v757 = cv757;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Bidder_bid0_124': {
        const v907 = v807[1];
        undefined /* setApiDetails */;
        const v913 = v907[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:121:30:spread', stdlib.UInt_max, '0')];
        const v914 = stdlib.gt(v913, v749);
        stdlib.assert(v914, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/auction.rsh:122:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:121:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:121:49:function exp)', 'at ./src/contracts/auction.rsh:104:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:121:49:function exp)', 'at ./src/contracts/auction.rsh:104:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:104:31:function exp)'],
          msg: 'Your bid is too low, please try again',
          who: 'Seller'
          });
        const v918 = stdlib.add(v757, v913);
        ;
        const v939 = [v746, v749];
        await txn4.getOutput('Bidder_bid', 'v939', ctc16, v939);
        if (v747) {
          const v955 = 'bidSuccess          ';
          null;
          const cv745 = v745;
          const cv746 = v806;
          const cv747 = false;
          const cv748 = v748;
          const cv749 = v913;
          const cv750 = v808;
          const cv756 = v756;
          const cv757 = v918;
          
          v745 = cv745;
          v746 = cv746;
          v747 = cv747;
          v748 = cv748;
          v749 = cv749;
          v750 = cv750;
          v756 = cv756;
          v757 = cv757;
          
          txn3 = txn4;
          continue;}
        else {
          const v952 = stdlib.sub(v918, v749);
          ;
          const v953 = 'bidSuccess          ';
          null;
          const cv745 = v745;
          const cv746 = v806;
          const cv747 = false;
          const cv748 = v748;
          const cv749 = v913;
          const cv750 = v808;
          const cv756 = v756;
          const cv757 = v952;
          
          v745 = cv745;
          v746 = cv746;
          v747 = cv747;
          v748 = cv748;
          v749 = cv749;
          v750 = cv750;
          v756 = cv756;
          v757 = cv757;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'Bidder_optIn0_124': {
        const v1004 = v807[1];
        undefined /* setApiDetails */;
        const v1015 = stdlib.add(v757, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
        ;
        const v1056 = stdlib.ge(v1015, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:83:application', stdlib.UInt_max, '900000'));
        if (v1056) {
          const v1060 = stdlib.sub(v1015, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:138:83:application', stdlib.UInt_max, '900000'));
          ;
          const v1062 = stdlib.ge(v1060, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
          if (v1062) {
            const v1066 = stdlib.sub(v1060, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
            ;
            const v1067 = true;
            await txn4.getOutput('Bidder_optIn', 'v1067', ctc17, v1067);
            const cv745 = v745;
            const cv746 = v746;
            const cv747 = v747;
            const cv748 = v748;
            const cv749 = v749;
            const cv750 = v808;
            const cv756 = v756;
            const cv757 = v1066;
            
            v745 = cv745;
            v746 = cv746;
            v747 = cv747;
            v748 = cv748;
            v749 = cv749;
            v750 = cv750;
            v756 = cv756;
            v757 = cv757;
            
            txn3 = txn4;
            continue;}
          else {
            const v1074 = true;
            await txn4.getOutput('Bidder_optIn', 'v1074', ctc17, v1074);
            const cv745 = v745;
            const cv746 = v746;
            const cv747 = v747;
            const cv748 = v748;
            const cv749 = v749;
            const cv750 = v808;
            const cv756 = v756;
            const cv757 = v1060;
            
            v745 = cv745;
            v746 = cv746;
            v747 = cv747;
            v748 = cv748;
            v749 = cv749;
            v750 = cv750;
            v756 = cv756;
            v757 = cv757;
            
            txn3 = txn4;
            continue;}}
        else {
          const v1082 = stdlib.ge(v1015, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
          if (v1082) {
            const v1086 = stdlib.sub(v1015, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:139:84:application', stdlib.UInt_max, '100000'));
            ;
            const v1087 = true;
            await txn4.getOutput('Bidder_optIn', 'v1087', ctc17, v1087);
            const cv745 = v745;
            const cv746 = v746;
            const cv747 = v747;
            const cv748 = v748;
            const cv749 = v749;
            const cv750 = v808;
            const cv756 = v756;
            const cv757 = v1086;
            
            v745 = cv745;
            v746 = cv746;
            v747 = cv747;
            v748 = cv748;
            v749 = cv749;
            v750 = cv750;
            v756 = cv756;
            v757 = cv757;
            
            txn3 = txn4;
            continue;}
          else {
            const v1094 = true;
            await txn4.getOutput('Bidder_optIn', 'v1094', ctc17, v1094);
            const cv745 = v745;
            const cv746 = v746;
            const cv747 = v747;
            const cv748 = v748;
            const cv749 = v749;
            const cv750 = v808;
            const cv756 = v756;
            const cv757 = v1015;
            
            v745 = cv745;
            v746 = cv746;
            v747 = cv747;
            v748 = cv748;
            v749 = cv749;
            v750 = cv750;
            v756 = cv756;
            v757 = cv757;
            
            txn3 = txn4;
            continue;}}
        break;
        }
      }
    
    }
  const v1107 = undefined /* Remote */;
  const v1108 = await txn3.getOutput('internal', 'v1107', ctc11, v1107);
  const v1110 = v1108[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:165:37:application', stdlib.UInt_max, '0')];
  const v1115 = stdlib.add(v757, v1110);
  const v1116 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1110);
  stdlib.assert(v1116, {
    at: './src/contracts/auction.rsh:165:37:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v1119 = 'down                ';
  null;
  const v1121 = stdlib.safeAdd(v750, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
  let v1122 = true;
  let v1123 = true;
  let v1124 = v750;
  let v1130 = v756;
  let v1131 = v1115;
  
  let txn4 = txn3;
  while (await (async () => {
    const v1138 = stdlib.le(v1124, v1121);
    const v1139 = v1138 ? v1123 : false;
    
    return v1139;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc18],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1163], secs: v1165, time: v1164, didSend: v557, from: v1162 } = txn5;
    switch (v1163[0]) {
      case 'Auctioneer_acceptSale0_432': {
        const v1166 = v1163[1];
        undefined /* setApiDetails */;
        ;
        const v1173 = true;
        await txn5.getOutput('Auctioneer_acceptSale', 'v1173', ctc17, v1173);
        const cv1122 = true;
        const cv1123 = false;
        const cv1124 = v1164;
        const cv1130 = v1130;
        const cv1131 = v1131;
        
        v1122 = cv1122;
        v1123 = cv1123;
        v1124 = cv1124;
        v1130 = cv1130;
        v1131 = cv1131;
        
        txn4 = txn5;
        continue;
        break;
        }
      case 'Auctioneer_rejectSale0_432': {
        const v1188 = v1163[1];
        undefined /* setApiDetails */;
        ;
        const v1203 = false;
        await txn5.getOutput('Auctioneer_rejectSale', 'v1203', ctc17, v1203);
        const cv1122 = false;
        const cv1123 = false;
        const cv1124 = v1164;
        const cv1130 = v1130;
        const cv1131 = v1131;
        
        v1122 = cv1122;
        v1123 = cv1123;
        v1124 = cv1124;
        v1130 = cv1130;
        v1131 = cv1131;
        
        txn4 = txn5;
        continue;
        break;
        }
      }
    
    }
  if (v1122) {
    const v1210 = v1130[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
    const v1211 = v1210[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:33:application', stdlib.UInt_max, '0')];
    ;
    ;
    const v1227 = 'accepted            ';
    null;
    return;
    }
  else {
    const v1233 = v1130[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:33:application', stdlib.UInt_max, '0')];
    const v1234 = v1233[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:219:33:application', stdlib.UInt_max, '0')];
    ;
    ;
    const v1250 = 'rejected            ';
    null;
    return;
    }
  
  
  
  };
export async function Auctioneer_acceptSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Auctioneer_acceptSale6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_rejectSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Auctioneer_rejectSale6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_stopAuction(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Auctioneer_stopAuction7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bidder_bid7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bidder_optIn7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`],
    pure: [],
    sigs: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAQAAEGBKCNBggFIKD3NpaHyKoBs7bPiAjSuNG7DqCbvIEBBwLAhD0mBQEBAQAABWFwcElEGN8aiWtiaWRTdWNjZXNzAAAAAAAAAAAAACI1ADEYQQnOKmRJIls1AUkhBVs1AoEQWzUINhoAF0lBAHciNQQjNQZJIQkMQAA+SSEKDEAAI0khCwxAAA4hCxJEKjX/KTT/UEIDXyEKEkQqNf8oNP9QQgNRIQkSRCo1/4ABAjT/UCEFr1BCAEpJIQwMQAAQIQwSRDYaATX/KDT/UEIAM4Ggi+pMEkQqNf8pNP9QIQWvUEIAHjYaAhc1BDYaAzYaARdJJQxAA6RJIQYMQAL2IQYSRCENNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSkpKSklXACA1/yEHWzX+gShbNf1IKjX8gTBbNftXOCA1+oFYWzX5gWBbNfhXaBQ194F8WzX2V4QYNfVXnCA19Fe8ARc181e9ARc18oG+AVs18VfGETXwgdcBWzXvSTUFNe6ABACscs007lCwNO4iVUkjDEAB9kkhDgxAAT0hDhJENO8hDwg17SEPiAiWNO0hCA9BAJ407SEICTXssSKyASEIsggjshA0+rIHszTsIQQPQQBJsSKyASEEsggjshA0/7IHs4AJAAAAAAAABCsBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI08TIGNPA07CEECUIFOoAJAAAAAAAABDIBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI08TIGNPA07EIFBDTtIQQPQQBJsSKyASEEsggjshA0/7IHs4AJAAAAAAAABD8BsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI08TIGNPA07SEECUIEs4AJAAAAAAAABEYBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI08TIGNPA07UIEfUg07lcBCDXtNO0XSTXsNPENRDTvNOwINes07IgHS4AIAAAAAAAAA6s09DTxFlBQsDT0NPEWUDUHNPNBADEnBDT7FlA07BZQsDT/NP40/TT8NPs0+jT5NPg09zT2NPUxACI08jTsMgY08DTrQgQPsSKyATTxsggjshA09LIHsycENPsWUDTsFlCwNP80/jT9NPw0+zT6NPk0+DT3NPY09TEAIjTyNOwyBjTwNOs08QlCA8tIgBjfGolrZW5kU3VjY2VzcwAAAAAAAAAAAAA0+xZQNPEWULA0+xYyBhZQNPEWUDXtgAgAAAAAAAADOTTtULA07TUHNP80/jT9NPw0+zT6NPk0+DT3NPY07TT0NPMiNPEyBjTwNO9CA2JIJDQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSlcAIDX/IQdbNf5XKBQ1/Vc8IDX8gVxbNfuBZFs1+ldsETX5gX1bNfhJNQU194AErnvUBjT3ULA09yJVQAAmgAkAAAAAAAAElQGwKDUHNP80/jT9NPw0+zT6IyIyBjT5NPhCBBCACQAAAAAAAASzALApNQc0/zT+NP00/DT7NPoiIjIGNPk0+EID6kkjDEACBSMSRLEisgEkshA0CLIYsyM0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSVcAIDX/IQdbNf5XKJQ1/YG8AVs1/FfEETX7gASai5F0sDT7VwARNfojNP6IBWE0/zEAEkQqNfkrNPwWUAM19zIKeDX2MgpgNPYJFjX1sSKyASSyEDT8shiABG3tvYCyGrMyCmA09gk09RcJFrcAPlcEAFA1+IAIAAAAAAAAArk0+FCwNPhJNfciWzX2NPchBVs19SI09hJEKzT8FlADNfMyCng18jIKYDTyCRY18bEisgEkshA0/LIYgARsreRvshqzMgpgNPIJNPEXCRa3AD5XBABQNfSACAAAAAAAAALGNPRQsDT0STXzIls18iI08hJEMRg18TT9V4AUNfArNPwWUAM17jIKeDXtMgpgNO0JFjXssSKyASSyEDT8shiABLlwy6SyGjT1FjTxFlAyBhZQNP9QNPBQNP1XCFBQNP1XeAhQNP4WULIaszIKYDTtCTTsFwkWtwA+VwQAUDXvgAgAAAAAAAAC2TTvULA070k17iJbNe0iNO0SRIAYmdjgDGNyZWF0ZWQAAAAAAAAAAAAAAAAANPUWUDT/ULA0/zT+NPw0+TT1NPNXCCAyBjTxNPAyBjT9IlsIgRivNP8jIyIyBjT7NPpJIlsjCBZcAFwANPY08gg07QhCALBIgcCaDIgDlLEisgEkshAishiABgcxADIJErIegAEHsh+ztD01CCI0ARJENARJIhJMNAISEURJNQVJSSJbNf9XCJQ1/oGcAVs1/YAE7SmI4zT/FlA0/lA0/RZQsIERr0k1/ElXABEhBa9cAFwANfshBIgDKLEisgEishIlshAyCrIUNP+yEbMxADT/FlA0/lA0/RZQNPtQKUsBVwB/ZyhLAVd/VmdIIzUBMgY1AkICkzX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jT9NPcONPsQQQBXNO407xZQNPAWUDTxUDTyFlA081A09BZQNPUWUDT2UDT3FlA0+FA0+VA0+hZRBwhQKFA0/BZQNP5QNP8WUClLAVcAf2coSwFXf2BnSCENNQEyBjUCQgINKzTwFlADNewyCng16zIKYDTrCRY16rEisgEkshA08LIYgASi8NoBsho0+LIaszIKYDTrCTTqFwkWtwA+VwQAUDXtgAgAAAAAAAAEUzTtULA07Uk17CJbNesiNOsSRIAY1sT5+GRvd24AAAAAAAAAAAAAAAAAAAAANPIWUDT8FlA07lA09RZQNPQWULA07jTvNPY0+TT8NP2BMggjIzT9NP40/zTrCEIAADX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/TT6DjT8EEEANDT1NPYWUDT3UDT4UDT5FlA0+hZQNP5QNP8WUClLAVcAf2coSwFXfwZnSCQ1ATIGNQJCAQ80+0EAb7EisgE0/lcAESJbshIlshA0+LIUNPayEbOxIrIBNP+yCCOyEDT1sgezgBhvKkMsYWNjZXB0ZWQAAAAAAAAAAAAAAAA091A0+RZQNPVQNPhQNPYWULCxIrIBIrISJbIQMgmyFTIKshQ09rIRs0IAb7EisgE0/lcAESJbshIlshA09bIUNPayEbOxIrIBNP+yCCOyEDT4sgezgBhvKkMscmVqZWN0ZWQAAAAAAAAAAAAAAAA091A0+RZQNPVQNPhQNPYWULCxIrIBIrISJbIQMgmyFTIKshQ09rIRs0IAADEZIQYSRLEisgEkshA0CLIYIQayGbOxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQIiNQhC/6c0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: {
    publish1: 1
    },
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 223,
  unsupported: [],
  version: 11,
  warnings: [`Step 1 calls a remote object at /app/src/contracts/auction.rsh:81:48:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/src/contracts/auction.rsh:82:68:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/src/contracts/auction.rsh:97:39:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/src/contracts/auction.rsh:165:37:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T8","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T9","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T10","name":"v4138","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T8","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T9","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_432","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_432","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_124","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_124","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_124","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1067","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1074","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1087","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1094","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v1107","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1173","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1203","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T14","name":"v0","type":"tuple"}],"name":"_reach_oe_v697","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"_reach_oe_v710","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v729","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v825","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v939","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"}],"name":"created","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"},{"indexed":false,"internalType":"uint256","name":"v5","type":"uint256"}],"name":"down","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"bytes20","name":"v1","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"},{"indexed":false,"internalType":"address payable","name":"v5","type":"address"}],"name":"outcome","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Auctioneer_acceptSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_rejectSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_stopAuction","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v4128","type":"uint256"}],"name":"Bidder_bid","outputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Bidder_optIn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v4140","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_432","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_432","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v4155","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_124","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_124","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_124","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v4167","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x601f196001600160401b0360806200426f38819003601f8101851683018481118482101762000555578392829160405283398101036101408112620006405760405191608083018381108582111762000555576040528051835262000067602082016200067d565b602084015260e0603f1983011262000640576060604051926200008a8462000645565b60408301518452605f1901126200064057604051620000a98162000661565b606082015181526080820151602082015260a08201516001600160801b031981168103620006405760408201526020830152620000e960c082016200067d565b604083015260e08101516060830152610100810151906001600160601b0319821682036200064057826101209260806200012b9501526040850152016200067d565b60608201524360035560405160c081018181108482111762000555576040526000815260006020820152600060408201526200016662000692565b606082015260405190604082019082821085831117620005555760009260a0926040528381528360208201526080820152015260405190620001a88262000661565b620001b262000692565b825260208201620001c2620006c2565b8152620001ce620006c2565b604084015260ff6004541662000627577faf21c54356e0cb238c07cd6d2a0ba48aa0a87eb5fccc9285719045c4cfe7472b6101606040513381528451602082015260018060a01b036020860151166040820152620002356040860151606083019062000709565b60608501516001600160a01b0316610140820152a1815180159081156200061a575b50156200060157600083515260006020845101526000604084510152825181515251805160406020820151910151151560405191620002968362000661565b6000835260208301526040820152620002ae620006c2565b9160005b60018110620005b15750508152604083015234620005985760405190620002d98262000645565b60008252600060208301526040820192604051620002f78162000645565b600081526200030562000692565b60208201526000604082015260006060820152600060808201528452604060608401916000835260808501936200033b620006c2565b855233865260018060a01b036020820151166020870152828101518752606060018060a01b0391015116835201518252620003a16001948560005543865560405194336020870152602060018060a01b0391015116604086015251606085019062000709565b516001600160a01b03166101408301525160008361016084015b8183106200056b57505050506101a081526101c08101818110848211176200055557604052805192831162000555576002548281811c911680156200054a575b60208210146200053457601f8111620004c7575b50602090601f84116001146200045e578394509083929160009462000452575b50501b916000199060031b1c1916176002555b604051613ad69081620007998239f35b0151925038806200042f565b919383169160026000528360206000209360005b87828210620004ad5750501062000493575b505050811b0160025562000442565b015160001960f88460031b161c1916905538808062000484565b848601518755909501946020948501948793500162000472565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f850160051c8101916020861062000529575b601f0160051c019083905b8281106200051c5750506200040f565b600081550183906200050c565b909150819062000501565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003fb565b634e487b7160e01b600052604160045260246000fd5b606060209160408651805183528481015185840152015115156040820152019301910190918490620003bb565b60405163100960cb60e01b815260096004820152602490fd5b620005bd818362000770565b51620005ca828662000770565b52620005d7818562000770565b506000198114620005eb57600101620002b2565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260086004820152602490fd5b9050600154143862000257565b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b60a081019081106001600160401b038211176200055557604052565b606081019081106001600160401b038211176200055557604052565b51906001600160a01b03821682036200064057565b60405190606082016001600160401b03811183821017620005555760405260006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000555576040528260005b828110620006f257505050565b8290620006fe62000692565b8184015201620006e5565b8051825260208082015180518285015290810151604080850191909152908101516001600160801b031916606080850191909152908201516001600160a01b03166080808501919091529082015160a084015201516001600160601b03191660c090910152565b906001811015620007825760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146100f45780632d2ae6eb146100eb57806334d3e29e146100e25780634a96cc0b146100d9578063573b8510146100d05780636f49e231146100c757806383230757146100be578063980e632f146100b5578063ab53f2c6146100ac578063b6279224146100a35763d2526fd90361000e5761009e610c4b565b61000e565b5061009e610bcf565b5061009e610b21565b5061009e610a94565b5061009e610a75565b5061009e610a28565b5061009e610295565b5061009e61023b565b5061009e6101ac565b5061009e610143565b5034610113576000366003190112610113576020600354604051908152f35b600080fd5b6040809180518452602081015160208501520151910152565b6060810192916101419190610118565b565b50600036600319011261011357610158610eec565b50606080610164610f42565b61019b8161017061101c565b6020810190600082515251151560208251015261018b61101c565b9060008252516020820152611b76565b01516101aa6040518092610118565bf35b506080366003190112610113576101c1610f42565b604051906101ce82610ce8565b6004358252606036602319011261011357604051916101ec83610d10565b6024359260028410156101135761022b93815260443561020b816110cb565b602082015260643561021c816110cb565b604082015260208201526112c8565b60405160008152602090f35b0390f35b50600036600319011261011357602060a0610254610f42565b6102898161026061101c565b85810190600282515251151560608251015261027a61101c565b90600082525186820152611b76565b01511515604051908152f35b506020366003190112610113576102aa610f42565b5061022b6102b7366136be565b6102bf613743565b6102da6102d56102d160045460ff1690565b1590565b611541565b60408051338152835160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a161031a600160005414611561565b610349610337610328610dd6565b60208082518301019101613808565b92518015908115610a1c575b50611581565b61035334156115a1565b61037161036c6103666020850151610b96565b336139aa565b6115c1565b61038d3360018060a01b036103868551610b96565b16146115e1565b6103a461039d6020840151610b96565b309061318f565b610180820152476101608201526103c3600160ff196004541617600455565b7f17f07aa4b6c5235bdee1dad1a74d71b991c43e424791a09cfd5f279e87ad1c226104c4600080604051632cfbfba760e01b60208201526004815261040781610ce8565b61041c6104176060890151610b96565b610b96565b82602083519301915af1610438610431612864565b8092613030565b5061044860ff1960045416600455565b6104766104613061045c6020890151610b96565b61318f565b6101808601518082036101a088015214611601565b61049a47610160860151900391602086019283515260208082518301019101613180565b60208251015251806040850152604051918291829190916020806040830194805184520151910152565b0390a16104d660408201515115611621565b6104e73061045c6020850151610b96565b6101e0820152476101c0820152610506600160ff196004541617600455565b7fac409bd3cde17befab0e71f00cafd21b2d9000ae74c75817aa165e490e5d3e0761060c60008060405160208101637541dda360e11b81526004825261054b82610ce8565b8261055c61041760608b0151610b96565b9251925af161057361056c612864565b8092613060565b5061058360ff1960045416600455565b6105ac6105973061045c6020890151610b96565b6101e086015180820361020088015214611641565b6105dd6105d3476101c08701519003926060870193845152602080825183010191016138fd565b60208351016112a9565b516080840181905260408051825181526020928301516001600160a01b03169281019290925290918291820190565b0390a161061e60808201515115611661565b61062b3060a083016112a9565b7e6c26012afbb3c33a9eda566e30bd79fff644e3e9cba355f1dd15094c3acabb6107cf60206040840151015160c084019081515261066f6105d360a0860151610b96565b4360408251015261068d6106838651610b96565b60608351016112a9565b6040850151608001516106ae906001600160601b03191660808351016112b8565b60206040860151015160a08251015260606040860151015160c0825101526106e66106dc6020870151610b96565b60e08351016112a9565b6106f73061045c6020880151610b96565b6102408501526107756000804793610220880194855261071f600160ff196004541617600455565b516040519061075182610743602082019363063eabe760e11b855260248301613911565b03601f198101845283610db3565b8261076261041760608d0151610b96565b9251925af161076f612864565b90613090565b5061078560ff1960045416600455565b6107ae6107993061045c6020890151610b96565b61024086015180820361026088015214611681565b479051900360e08401908151525180610100850152604051918291826128b1565b0390a16107e261010082015151156116a1565b7f559c3ec702008d1ed78655027921d3b393ce36ca96582df6df0c2796cf7148de610824610120830161081e816618dc99585d195960ca1b9052565b516110a9565b6020604084015101519061086f61083b8651610b96565b604080516001600160601b0319909416845260208401949094526001600160a01b0316928201929092529081906060820190565b0390a16000610140820151526000602061014083015101526000604061014083015101526109f660806108a0611ab8565b936108b46108ae8251610b96565b866112a9565b6108cd6108c46020830151610b96565b602087016112a9565b6108e66108dd6060830151610b96565b604087016112a9565b6108fc6108f38551151590565b15156060870152565b604084015160209081015186840152828501510151610927906001600160a01b031660a087016112a9565b4360c086015261094661093d60a0860151610b96565b60e087016112a9565b6040810151820151610966906001600160601b03191661010087016112b8565b6109756040820151514361301c565b61012086015261014084015161014086015261099e6109948251610b96565b61016087016112a9565b600161018086015260016101a086015260006101c0860152436101e086015201518051906109f1600183510192604060208201519101511515906109e0610e7f565b948552602085015215156040840152565b613a2c565b610200830152610100604082015151608083015151019101515101610220820152612be8565b90506001541438610343565b5060003660031901126101135760206040610a41610f42565b61028981610a4d610f81565b8581019060018251525115158582510152610a66610f81565b906000825251868201526112c8565b5034610113576000366003190112610113576020600154604051908152f35b5060a036600319011261011357610aa9610f42565b60405190610ab682610ce8565b600435825260803660231901126101135760405191610ad483610d2b565b6024359260038410156101135761022b938152604435610af3816110cb565b6020820152610b01366136de565b6040820152608435610b12816110cb565b60608201526020820152611b76565b503461011357600080600319360112610b93578054610b3e610dd6565b906040519283918252602090604082840152835191826040850152815b838110610b7c57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610b5b565b80fd5b6001600160a01b031690565b6001600160a01b03169052565b81516001600160a01b031681526020918201519181019190915260400190565b50602036600319011261011357610be4610f29565b506102376080610bf2610f42565b610c3d81604051610c0281610ce8565b604051610c0e81610d46565b6000815281526020810190610c21610fcb565b825260043581515260018251525160408251015261018b61101c565b015160405191829182610baf565b50600036600319011261011357602080610c63610f42565b61028981610c6f610f81565b8481019060008251525115158582510152610c88610f81565b906000825251858201526112c8565b90600182811c92168015610cc7575b6020831014610cb157565b634e487b7160e01b600052602260045260246000fd5b91607f1691610ca6565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610d0357604052565b610d0b610cd1565b604052565b606081019081106001600160401b03821117610d0357604052565b608081019081106001600160401b03821117610d0357604052565b602081019081106001600160401b03821117610d0357604052565b60c081019081106001600160401b03821117610d0357604052565b61010081019081106001600160401b03821117610d0357604052565b60a081019081106001600160401b03821117610d0357604052565b601f909101601f19168101906001600160401b03821190821017610d0357604052565b6040519060008260025491610dea83610c97565b808352600193808516908115610e5e5750600114610e10575b5061014192500383610db3565b60026000908152600080516020613a8a83398151915294602093509091905b818310610e46575050610141935082010138610e03565b85548884018501529485019487945091830191610e2f565b905061014194506020925060ff191682840152151560051b82010138610e03565b6040519061014182610d10565b6040519061022082016001600160401b03811183821017610d0357604052565b6040519061024082016001600160401b03811183821017610d0357604052565b6040519061028082016001600160401b03811183821017610d0357604052565b60405190606082016001600160401b03811183821017610f1c575b60405260006040838281528260208201520152565b610f24610cd1565b610f07565b60405190610f3682610ce8565b60006020838281520152565b60405190610f4f82610d61565b600060a083828152826020820152826040820152610f6b610eec565b6060820152610f78610f29565b60808201520152565b60405190610f8e82610ce8565b81600081526020610f9d610eec565b910152565b50634e487b7160e01b600052602160045260246000fd5b60021115610fc357565b610141610fa2565b60405190608082016001600160401b0381118382101761100f575b604052600060608382815282602082015260405161100381610d46565b83815260408201520152565b611017610cd1565b610fe6565b6040519061102982610ce8565b81600081526020610f9d610fcb565b60031115610fc357565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611088575b8285015260208101511515606085015201511515910152565b611090610fa2565b61106f565b51906001600160a01b038216820361011357565b6001600160601b03191690565b51906001600160601b03198216820361011357565b8015150361011357565b5190610141826110cb565b9080601f83011215610113576040918251926110fb84610d46565b836060938484019381851161011357915b84831061111c5750505050505090565b8583830312610113578351869161113282610d10565b8451825260209182860151838201528686015161114e816110cb565b8782015281520192019161110c565b6101408183031261011357610120906111d76040519361117c85610d7c565b61118583611095565b855261119360208401611095565b60208601526111a4604084016110b6565b60408601526111b560608401611095565b60608601526080830151608086015260a083015160a086015260c083016110e0565b60c0840152015160e082015290565b5160028110156111f35790565b6111fb610fa2565b90565b6040519061120b82610d46565b8160005b6020811061121b575050565b602090611226610eec565b818401520161120f565b6040519061016082016001600160401b0381118382101761129c575b604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526112926111fe565b6101208201520152565b6112a4610cd1565b61124c565b6001600160a01b039091169052565b6001600160601b03199091169052565b90611342906112e46112df6102d160045460ff1690565b6116c1565b6040907f109eb76f82f8872ff024177afedebf0c35323f0a478a1f78956f6ddd62aa1576825180611316873383611042565b0390a16113276006600054146116e1565b61132f610dd6565b602093818580809451830101910161115d565b9461135881518015908115611535575b50611701565b0161136381516111e6565b61136c81610fb9565b61146857509261140960e0926113c2856101419761138a3415611741565b8351600181527f8361bf4e7e0629f6e73204ce69898313119fc14269ddea751c42e451d887bb6f9080602081015b0390a10160019052565b6113f56113cd611230565b956113e16113db8651610b96565b886112a9565b6113ed81860151610b96565b9087016112a9565b611401818401516110a9565b9085016112b8565b6114226114196060830151610b96565b606085016112a9565b6080810151608084015260a081015160a084015261144360c0840160019052565b6000828401524361010084015260c0810151610120840152015161014082015261333d565b611477600191959295516111e6565b61148081610fb9565b1461148c575b50505050565b6114dc82600060e09461152c976114a33415611721565b8151600081527fd721daa9930fa177805dd4d5cd9440a58640e0d2ebc4146b78f18b8ec4a6ae9e90602090a101526113f56113cd611230565b6114ec6114196060830151610b96565b6080810151608084015260a081015160a0840152600060c08401526000828401524361010084015260c0810151610120840152015161014082015261333d565b38808080611486565b90506001541438611352565b1561154857565b60405163100960cb60e01b8152600a6004820152602490fd5b1561156857565b60405163100960cb60e01b8152600b6004820152602490fd5b1561158857565b60405163100960cb60e01b8152600c6004820152602490fd5b156115a857565b60405163100960cb60e01b8152600d6004820152602490fd5b156115c857565b60405163100960cb60e01b8152600e6004820152602490fd5b156115e857565b60405163100960cb60e01b8152600f6004820152602490fd5b1561160857565b60405163100960cb60e01b815260106004820152602490fd5b1561162857565b60405163100960cb60e01b815260126004820152602490fd5b1561164857565b60405163100960cb60e01b815260136004820152602490fd5b1561166857565b60405163100960cb60e01b815260156004820152602490fd5b1561168857565b60405163100960cb60e01b815260166004820152602490fd5b156116a857565b60405163100960cb60e01b815260186004820152602490fd5b156116c857565b60405163100960cb60e01b815260196004820152602490fd5b156116e857565b60405163100960cb60e01b8152601a6004820152602490fd5b1561170857565b60405163100960cb60e01b8152601b6004820152602490fd5b1561172857565b60405163100960cb60e01b8152601d6004820152602490fd5b1561174857565b60405163100960cb60e01b8152601c6004820152602490fd5b1561176857565b60405163100960cb60e01b8152601e6004820152602490fd5b1561178857565b60405163100960cb60e01b8152601f6004820152602490fd5b156117a857565b60405163100960cb60e01b815260206004820152602490fd5b156117c857565b602460405163100960cb60e01b8152816004820152fd5b156117e657565b60405163100960cb60e01b815260226004820152602490fd5b1561180657565b60405163100960cb60e01b815260236004820152602490fd5b1561182657565b60405163100960cb60e01b815260216004820152602490fd5b1561184657565b60405163100960cb60e01b815260256004820152602490fd5b1561186657565b60405163100960cb60e01b815260276004820152602490fd5b6040519061012082016001600160401b038111838210176118f1575b6040526000808352610100836118af610eec565b60208201526040516118c081610d46565b83815260408201528260608201526118d6610f29565b60808201528260a08201528260c08201528260e08201520152565b6118f9610cd1565b61189b565b9092916060602060a09260c0850196600180861b0316855280518286015201518051600381101561194e575b60408501526020810151151582850152604081015151608085015201511515910152565b611956610fa2565b61192a565b91908260609103126101135760405161197381610d10565b604080829480518452602081015160208501520151910152565b906102a082820312610113576102806119a4610e8c565b926119ae81611095565b84526119bc60208201611095565b60208501526119cd60408201611095565b60408501526119de606082016110d5565b6060850152608081015160808501526119f960a08201611095565b60a085015260c081015160c0850152611a1460e08201611095565b60e0850152610100611a278183016110b6565b908501526101208082015190850152610140611a458482840161195b565b908501526101a0611a57818301611095565b610160860152611a9e6101c094611a6f8685016110d5565b6101808801526101e092611a848486016110d5565b9088015261020095868501519088015261022084016110e0565b9085015201519082015290565b5160038110156111f35790565b611ac0610eac565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152611b06610eec565b6101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152611b376111fe565b610200840152610220830152565b506040513d6000823e3d90fd5b6001600160601b031990911681526020810191909152604081019190915260600190565b611bf890611b8261187f565b92611b9a611b956102d160045460ff1690565b611761565b60407fc08304f8842fdf9fe5c32b7c33d0b2bb36997def29e0c6d0fa626741dcab6010815180611bcb8633836118fe565b0390a16000611bdd6007825414611781565b611be5610dd6565b602095818780809451830101910161198d565b94611c0e81518015908115612819575b506117a1565b0195611c1a8751611aab565b611c2381611038565b611dfd576101419650611c36341561181f565b69656e645375636365737360b01b8152611c5081516110a9565b92611d1e6080870191825196600080516020613aaa8339815191526101c098898b0198611c838a51865193849384611b52565b0390a1898451950194855152438a86510152865182865101527f1ae8cccf4555a515db54b02adfff0908c9feafcac09cf393207d2e13bb08da11611ccd8651845191829182610131565b0390a160608551910152611d0a611ce2611ab8565b99611cf6611cf08b51610b96565b8c6112a9565b611d02818b0151610b96565b908b016112a9565b611d1681890151610b96565b9089016112a9565b611d37611d2e6060880151151590565b15156060890152565b516080870152611d56611d4d60a0870151610b96565b60a088016112a9565b60c085015160c0870152611d79611d7060e0870151610b96565b60e088016112a9565b611d93610100611d8b818801516110a9565b9088016112b8565b610120808601519087015251610140860152611db76101606113ed81870151610b96565b611dd1610180611dc981870151151590565b151590870152565b6101a085015251908301526101e043818401528101519061020091828401520151610220820152612be8565b9194956001611e0f8296959651611aab565b611e1881611038565b036121ea5785905101519085830191808352516101c093611e3e858701928351106117df565b610200968787015198611e6086519a8b51019a606085019b8c525134146117ff565b6101609283890194611e728651610b96565b938d6080958691611e878387019283516112a9565b845190825101527f29c3866970af068b3e49e1be46a3ff55b3075169b8ccf8b41b0fcc784b2fa350611ebf8251885191829182610baf565b0390a15191015261018095611ed6878c0151151590565b1561204057505060c001611ef681696269645375636365737360b01b9052565b51611f00906110a9565b90828901918251885151918351928392611f1a9284611b52565b03600080516020613aaa83398151915291a1611f34611ab8565b9b8c8a51611f4190610b96565b611f4a916112a9565b808a0151611f5790610b96565b611f62918e016112a9565b80890151611f6f90610b96565b611f7a918d016112a9565b6060888101511515908c015251908a015260a0860151611f9990610b96565b611fa69060a08b016112a9565b60c086015160c08a015260e0860151611fbe90610b96565b611fcb9060e08b016112a9565b61010080870151611fdb906110a9565b611fe6918b016112b8565b61012086810151908a015261014080870151908a01526120099033908a016112a9565b8701526101a08381015115151515908701525151908501526101e09043828601520151908301525161022082015261014190612be8565b91878080849f9e9d9c9b9a60a095612060610417839d9c9b9a9951610b96565b9051908282156121e1575bf1156121d4575b696269645375636365737360b01b910181905261208e906110a9565b908289019182518851519183519283926120a89284611b52565b03600080516020613aaa83398151915291a16120c2611ab8565b809d8a516120cf90610b96565b6120d990836112a9565b808b01516120e690610b96565b9101906120f2916112a9565b808901516120ff90610b96565b61210a918e016112a9565b6060888101511515908d015251908b015260a086015161212990610b96565b6121369060a08c016112a9565b60c086015160c08b015260e086015161214e90610b96565b61215b9060e08c016112a9565b6101008087015161216b906110a9565b612176918c016112b8565b61012086810151908b015261014080870151908b01526121999033908b016112a9565b8801526101a08381015115151515908801525151908601526101e0904382870152015190840152519051900361022082015261014190612be8565b6121dc611b45565b612072565b506108fc61206b565b6121fa6002919695929651611aab565b61220381611038565b14612211575b505050505050565b620f424090610200948286860151019161223460e09485870194855234146117c1565b8251620dbba0939084811061259a5750620dbb9f19905101976101008096019889528080808060a08b019761226c6104178a51610b96565b82f11561258d575b8851620186a090811161241f57818080926122926104178c51610b96565b82f115612412575b8151600181527f6b377c1bfba0a663a008460ba46a836d8cc627428257c8f9ea36546bdc1450bb90602090a160a0016122d39060019052565b6122db611ab8565b9785516122e790610b96565b6122f1908a6112a9565b808601516122fe90610b96565b612309918a016112a9565b8085015161231690610b96565b6123219189016112a9565b6060840151151515156060880152608084015160808801525161234390610b96565b6123509060a088016112a9565b60c083015160c08701528083015161236790610b96565b6123729187016112a9565b8082015161237f906110a9565b61238a9186016112b8565b61012080820151908501526101408082015190850152610160808201516123b090610b96565b6123bb9186016112a9565b610180818101511515908501526101a0808201511515908501526101c08082015190850152436101e080860191909152015190830152516201869f190161022082015261240790612be8565b388080808080612209565b61241a611b45565b61229a565b50508151600181527fa16e02d7bbbcabc8453e40343384df419e54c5a83f94485b90d2b96eba60a73d90602090a160a00161245a9060019052565b612462611ab8565b97855161246e90610b96565b612478908a6112a9565b8086015161248590610b96565b612490918a016112a9565b8085015161249d90610b96565b6124a89189016112a9565b606084015115151515606088015260808401516080880152516124ca90610b96565b6124d79060a088016112a9565b60c083015160c0870152808301516124ee90610b96565b6124f99187016112a9565b80820151612506906110a9565b6125119186016112b8565b610120808201519085015261014080820151908501526101608082015161253790610b96565b6125429186016112a9565b610180818101511515908501526101a0808201511515908501526101c08082015190850152436101e0808601919091520151908301525161022082015261258890612be8565b612407565b612595611b45565b612274565b94999890979695509193909250620186a090811161274f579261260f60a06125889a94848080612656976126a79a6125d56104178e51610b96565b82f115612742575b8351600181527f077cdc57e013a005ebf606427b479e48411eb96c1d763ce6ee76a1461415d38d9080602081016113b8565b61264261261a611ab8565b9861262e6126288851610b96565b8b6112a9565b61263a81880151610b96565b908a016112a9565b61264e81860151610b96565b9088016112a9565b61266f6126666060850151151590565b15156060880152565b60808301516080870152612689611d4d60a0850151610b96565b60c083015160c087015261269f81840151610b96565b9086016112a9565b6126c16101006126b9818401516110a9565b9086016112b8565b610120808201519085015261014080820151908501526126e961016061269f81840151610b96565b6127036101806126fb81840151151590565b151590860152565b6127156101a06126fb81840151151590565b6101c080820151908501526101e09043828601520151908301526201869f19905101610220820152612be8565b61274a611b45565b6125dd565b5050956126568261260f60a06125889a7ff910c4baf35cc7aff398eef490c107e2a3db0dbd3b5fc087d3bf4ee4db32caa46127959751806113b881906001602083019252565b6127a76101006126b9818401516110a9565b610120808201519085015261014080820151908501526127cf61016061269f81840151610b96565b6127e16101806126fb81840151151590565b6127f36101a06126fb81840151151590565b6101c080820151908501526101e090438286015201519083015251610220820152612be8565b90506001541438611c08565b6040519061283282610d61565b600060a08361283f610f29565b8152612849610f29565b60208201528260408201528260608201528260808201520152565b3d156128ac573d906001600160401b03821161289f575b60405191612893601f8201601f191660200184610db3565b82523d6000602084013e565b6128a7610cd1565b61287b565b606090565b91909160208060408301948051845201511515910152565b6128d1610e8c565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152612917610eec565b6101408401528061016084015280610180840152806101a0840152806101c08401526129416111fe565b6101e0840152610200830152565b6000915b6001831061296057505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190612953565b9190916102806102a08201936129a6838251610ba2565b6129b860208201516020850190610ba2565b6129ca60408201516040850190610ba2565b606081810151151590840152608081015160808401526129f260a082015160a0850190610ba2565b60c081015160c0840152612a0e60e082015160e0850190610ba2565b610100818101516001600160601b031916908401526101208082015190840152612a416101408083015190850190610118565b61016081015190612a586101a09283860190610ba2565b612aa261018082015192612a736101c0948588019015159052565b82015192612a886101e0948588019015159052565b82015192610200938487015282015161022086019061294f565b0151910152565b818110612ab4575050565b60008155600101612aa9565b90601f8211612acd575050565b6101419160026000526020600020906020601f840160051c83019310612afb575b601f0160051c0190612aa9565b9091508190612aee565b80519091906001600160401b038111612bdb575b612b2d81612b28600254610c97565b612ac0565b602080601f8311600114612b695750819293600092612b5e575b50508160011b916000199060031b1c191617600255565b015190503880612b47565b6002600052601f19831694909190600080516020613a8a833981519152926000905b878210612bc3575050836001959610612baa575b505050811b01600255565b015160001960f88460031b161c19169055388080612b9f565b80600185968294968601518155019501930190612b8b565b612be3610cd1565b612b19565b612bf0612825565b6101e082810180516101208086018051909591939260009110612fdd57506101a086015115155b15612d6057505091612d5b9161022061014195612d4d95612c366128c9565b94612c4a612c448451610b96565b876112a9565b612c63612c5a6020850151610b96565b602088016112a9565b612c7c612c736040850151610b96565b604088016112a9565b612c8c6126666060850151151590565b60808301516080870152612ca6611d4d60a0850151610b96565b60c083015160c0870152612cc0611d7060e0850151610b96565b612cd2610100611d8b818601516110a9565b51908501526101408082015190850152612cf461016061269f81840151610b96565b612d066101806126fb81840151151590565b60016101a08501526101c08082015190850152610200928382015190850152015190820152612d356007600055565b612d3e43600155565b6040519283916020830161298f565b03601f198101835282610db3565b612b05565b9193509150610220846020610141960194612d7e61039d8751610b96565b60808501908152479560608601968752612da0600160ff196004541617600455565b61014096612e368886015193612e086000808960409882612df56104178c805195612dee87612de06020820198634c344d9d60e01b8a5260248301610131565b03601f198101895288610db3565b0151610b96565b9251925af1612e02612864565b906130c0565b50612e1860ff1960045416600455565b612e263061045c8d51610b96565b905180820360a08b01521461183f565b4790519003865152612e9d828751977f7ca0ad8377b6e39ed33f5f8e45cb35677029307d9676c28bfef34fd26f77f160612e7c602083019a808c528451918291826128b1565b0390a1612e8b8951511561185f565b633237bbb760e11b910190815261081e565b7f357c94579deebb86dae97569dd270d5562f0a208d6b4874cfcc80bb87d54176d60808601516101c0870192612f338451612ed88a51610b96565b612ee560e08c0151610b96565b60c08c8101518b516001600160601b03199097168752602087019790975260408601939093526001600160a01b03918216606086015216608084015260a08301939093529091829190820190565b0390a1612f67612f5e612f44611230565b9a612f58612f528951610b96565b8d6112a9565b51610b96565b60208b016112a9565b612f8261010093612f7a858801516110a9565b908b016112b8565b612f9c612f93610160870151610b96565b60608b016112a9565b516080890152612fac8151612ff9565b60a0890152600160c0890152600160e08901525190870152610200820151908601520151905151019082015261333d565b612c17565b50634e487b7160e01b600052601160045260246000fd5b90603282019182811161300f575b821061011357565b613017612fe2565b613007565b919082019182811161300f57821061011357565b156130385790565b80511561304757805190602001fd5b60405163100960cb60e01b815260116004820152602490fd5b156130685790565b80511561307757805190602001fd5b60405163100960cb60e01b815260146004820152602490fd5b156130985790565b8051156130a757805190602001fd5b60405163100960cb60e01b815260176004820152602490fd5b156130c85790565b8051156130d757805190602001fd5b60405163100960cb60e01b815260266004820152602490fd5b156130f85790565b80511561310757805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b156131285790565b80511561313757805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156131585790565b80511561316757805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b90816020910312610113575190565b600080916111fb93826040519160208301926370a0823160e01b845260018060a01b038092166024820152602481526131c781610d10565b5193165af16131de6131d7612864565b80926130f0565b5060208082518301019101613180565b9060018110156131ff5760051b0190565b634e487b7160e01b600052603260045260246000fd5b613220600254610c97565b806132285750565b601f811160011461323b57506000600255565b600260005261328090601f0160051c600080516020613a8a833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612aa9565b6000602081208160025555565b6040519061329a82610d7c565b8160e06000918281528260208201528260408201528260608201528260808201528260a08201526132c96111fe565b60c08201520152565b91909161012060e061014083019460018060a01b0380825116855280602083015116602086015260018060601b0319604083015116604086015260608201511660608501526080810151608085015260a081015160a0850152612aa260c082015160c086019061294f565b613345610f29565b61010082015160a0830180519093929160009110613614575060e082015115155b156134255750612d5b61014192610140612d4d9361338261328d565b926133966133908351610b96565b856112a9565b6133af6133a66020840151610b96565b602086016112a9565b6133c86133bf60408401516110a9565b604086016112b8565b6133e16133d86060840151610b96565b606086016112a9565b608082015160808501525160a084015261012081015160c0840152015160e082015261340d6006600055565b61341643600155565b604051928391602083016132d2565b907f543cb95dd81154d567510afb182f8995b596950b4795b12737cf59283102e666925061345660c0820151151590565b1561357d5761354e60208201916134d86134708451610b96565b9461349d60608401966134838851610b96565b6101208601515151916001600160a01b0390911690613619565b60008080806134af6104178851610b96565b61014088015190828215613574575bf115613567575b671858d8d95c1d195960c21b815261081e565b926134e660408301516110a9565b946135036134fc6134fc60808601519551610b96565b9251610b96565b92604051968796876001600160601b031991821681529116602082015260408101919091526001600160a01b039182166060820152918116608083015290911660a082015260c00190565b0390a16000805561355f6000600155565b610141613215565b61356f611b45565b6134c5565b506108fc6134be565b61354e60208201916135b66135928451610b96565b61359c8351610b96565b6101208401515151916001600160a01b0390911690613619565b6134d86020606083019560008080806135d26104178c51610b96565b6101408901519082821561360b575bf1156135fe575b671c995a9958dd195960c21b910190815261081e565b613606611b45565b6135e8565b506108fc6135e1565b613366565b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261369593600093849392849190608081016001600160401b0381118282101761369c575b6040525193165af161368561367e612864565b8092613120565b50602080825183010191016136a9565b1561011357565b6136a4610cd1565b61366b565b9081602091031261011357516111fb816110cb565b602090600319011261011357604051906136d782610d46565b6004358252565b602090606319011261011357604051906136f782610d46565b6064358252565b6040519061370b82610d7c565b8160e0600091828152826020820152826040820152826060820152826080820152613734610eec565b60a08201528260c08201520152565b61374b610ecc565b906000808352613759610f29565b6020840152613766610f29565b6040840152613773610f29565b6060840152613780610f29565b60808401528060a08401526137936136fe565b60c08401526137a0610f29565b60e08401526137ad610f29565b610100840152806101208401526137c2610eec565b6101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152806102008401528061022084015280610240840152610260830152565b90818103906101a0821261011357604080519361382485610d98565b61382d81611095565b855261383b60208201611095565b602086015260e0603f1985011261011357606082519461385a86610d98565b828401518652605f1901126101135781519361387585610d10565b606082015185526080820151602086015260a0820151926001600160801b031984168403610113578561014094826138f598015260208301526138ba60c08401611095565b8183015260e083015160608301526138d561010084016110b6565b60808301528601526138ea6101208201611095565b6060860152016110e0565b608082015290565b90816020910312610113576111fb90611095565b815181526020808301516001600160a01b039081168284015260408085015181850152606080860151909216918401919091526080808501516001600160601b0319169084015260a0808501518051918501919091529182015160c084015201516001600160801b03191660e0808301919091526101408201939261014192916101209160c08101516101008501520151910190610ba2565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152600160648084019190915282526111fb93600093849391929184919060a081016001600160401b03811182821017613a1f575b6040525193165af1613685613a18612864565b8092613150565b613a27610cd1565b613a05565b9190613a366111fe565b9260005b60018110613a485750508252565b80613a55600192846131ee565b51613a6082886131ee565b52613a6b81876131ee565b506000198114613a7c575b01613a3a565b613a84612fe2565b613a7656fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5aceacf14236eb0aafe887aa56af00dd77d2c3e62c8620f2878747fe2ef6e848cd21a164736f6c6343000810000a`,
  BytecodeLen: 17007,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/auction.rsh:69:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/auction.rsh:230:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/auction.rsh:230:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/auction.rsh:180:58:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/auction.rsh:104:31:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Auctioneer_acceptSale": Auctioneer_acceptSale,
  "Auctioneer_rejectSale": Auctioneer_rejectSale,
  "Auctioneer_stopAuction": Auctioneer_stopAuction,
  "Bidder_bid": Bidder_bid,
  "Bidder_optIn": Bidder_optIn,
  "Seller": Seller
  };
export const _APIs = {
  Auctioneer: {
    acceptSale: Auctioneer_acceptSale,
    rejectSale: Auctioneer_rejectSale,
    stopAuction: Auctioneer_stopAuction
    },
  Bidder: {
    bid: Bidder_bid,
    optIn: Bidder_optIn
    }
  };
