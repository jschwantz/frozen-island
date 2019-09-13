const User = require('./user')
const Lease = require('./lease')
const LeaseOption = require('./leaseOption')
const LeaseVersion = require('./leaseVersion')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Lease.belongsTo(User)
User.hasMany(Lease)
LeaseVersion.belongsTo(Lease)
Lease.hasMany(LeaseVersion)
LeaseOption.belongsTo(LeaseVersion)
LeaseVersion.hasOne(LeaseOption)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Lease,
  LeaseVersion,
  LeaseOption
}
