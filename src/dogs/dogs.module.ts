import { Module, HttpModule } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Module({
    imports: [HttpModule],
    providers: [DogsService],
    exports: [DogsService]    
})
export class DogsModule {}
