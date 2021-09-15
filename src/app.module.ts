import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonebookModule } from './phonebook/phonebook.module';

@Module({
	imports: [
		MongooseModule.forRoot("mongodb+srv://Rofhiwa:R728692m@cluster0.oie0j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { autoCreate: true }),
		
		PhonebookModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
