import type { ReactNode } from "react";
import usePermission, { DEFAULT_PERMISSION_CHECK_MODE, PermissionCheckMode } from "@/hooks/usePermission/usePermission";

export interface HasPermissionProps {
  /**
   *  Permissions name or array of permission names
   */
  name: string | string[];
  /**
   *  The content of the component
   */
  children?: ReactNode;
  /**
   * A fallback react to display when permissions is not enabled for given name
   */
  fallback?: ReactNode;
  /**
   * Additional permissions to check with combined context permissions
   */
  additionalPermissions?: string[];
  /**
   * Operator to use when checking multiple permissions:
   * - "or": User must have at least one of the permissions (default)
   * - "and": User must have all permissions
   */
  permissionCheckMode?: PermissionCheckMode;
}

export const HasPermission = ({
  children,
  fallback,
  name,
  additionalPermissions,
  permissionCheckMode = DEFAULT_PERMISSION_CHECK_MODE,
}: HasPermissionProps) => {
  const { hasPermission } = usePermission();
  const hasAccess = hasPermission(name, additionalPermissions, permissionCheckMode);

  if (hasAccess) {
    return children;
  }

  if (!hasAccess && fallback) {
    return fallback;
  }

  return null;
};

export default HasPermission;
