import withConnection from '../../mongoose/withConnection'
import UserModel from '../../mongoose/models/UserModel'
import withErrorHandler from '../../server/middleware/withErrorHandler'
import withBody from '../../server/middleware/withBody'

const getUsers = (req) => {
  return UserModel.findOne(req.body)
}

export default withConnection(withErrorHandler(withBody(getUsers)))