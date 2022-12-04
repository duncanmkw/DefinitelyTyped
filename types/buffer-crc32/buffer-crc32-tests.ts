import crc32 = require('buffer-crc32');

const buf = new Buffer([0x00, 0x73, 0x75, 0x70, 0x20, 0x62, 0x72, 0x6f, 0x00]);
crc32(buf); // $ExpectType Buffer
crc32('自動販売機'); // $ExpectType Buffer

crc32.signed(buf); // $ExpectType number
crc32.signed('自動販売機'); // $ExpectType number
crc32.unsigned(buf); // $ExpectType number
crc32.unsigned('自動販売機'); // $ExpectType number

const partialCrc = crc32('hey');
crc32(' ', partialCrc); // $ExpectType Buffer

const partialUnsignedCrc = crc32.unsigned('hey');
crc32.unsigned(' ', partialUnsignedCrc); // $ExpectType number

const partialSignedCrc = crc32.signed('hey');
crc32.signed(' ', partialSignedCrc); // $ExpectType number
