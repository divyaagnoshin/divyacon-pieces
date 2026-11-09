import { PiecePropValueSchema } from '@agnocon/pieces-framework';
import { rabbitmqAuth } from '../auth';
import { ChannelModel } from 'amqplib';
export declare function rabbitmqConnect(auth: PiecePropValueSchema<typeof rabbitmqAuth>): Promise<ChannelModel>;
//# sourceMappingURL=index.d.ts.map