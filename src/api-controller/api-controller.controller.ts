import {Controller, Get} from '@nestjs/common';

// @Controller('api-controller')
@Controller({host: 'api.example.com'})
export class ApiControllerController {
    @Get()
    index(): string {
        return "Hello, API";
    }
}
