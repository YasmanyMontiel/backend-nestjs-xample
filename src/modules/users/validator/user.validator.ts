import { ACCESS_LEVEL } from 'src/constants/roles';
import { UserDTO } from '../dto/user.dto';
import { ErrorManager } from 'src/utils/error.manager';

export class UserDtoValidator {
  static validate(objDTO: UserDTO) {
    const errors = [];
    if (!objDTO.email) {
      errors.push(this.errorManagerDTO());
      return errors;
    }
  }

  static errorManagerDTO() {
    let message = 'Email is required by yasmany';
    const errors = [];
    try {
      throw new ErrorManager({
        type: 'NO_CONTENT',
        message: message,
      });
    } catch (error) {
      errors.push(error);
      console.log(error.message);
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
