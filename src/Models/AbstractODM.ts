import { model, Model, models, Schema, UpdateQuery } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(key: T): Promise<T> {
    return this.model.create({ ...key });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(_id: string): Promise<T | null> {
    const value = await this.model.findOne({ _id });
    return value;
  }

  // prettier-ignore
  public async update(_id: string, info: T): Promise<T | null> {
    // https://mongoosejs.com/docs/api.html#model_Model-findOneAndUpdate
    const value = await this.model.findByIdAndUpdate(
      { _id },
      { ...info } as UpdateQuery<T>,
      { new: true },
    );
    return value;
  }

  public async remove(_id: string) {
    const value = await this.model.findByIdAndDelete({ _id });
    return value;
  }
}
